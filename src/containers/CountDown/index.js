import React, { useEffect, useMemo, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import isEmpty from 'lodash/isEmpty';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import StopIcon from '@material-ui/icons/Stop';

import CountDownColumn from 'components/CountDown/Column';
import LapsModal from 'components/LapsModal';
import ThresholdWarning from 'components/Threshold';
import {
  getPaddedNumberWithZero,
  setTimeInLocalStorage,
  setIsRunningInLocalStorage,
  getTimeFromLocalStoreage,
} from 'utils/helper';

const useStyles = makeStyles(theme => ({
  gridItemRoot: {
    padding: theme.spacing(1),
  },
  iconRoot: {
    fontSize: 50,
  },
  '@keyframes blink': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
}));

const lapThreshold = 60000;

function CountDown() {
  const [countDownTime, setCountDownTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapStarted, setLapStarted] = useState(false);
  const [lapStartTime, setLapStartTime] = useState(0);
  const [lapEndTime, setLapEndTime] = useState(0);
  const [lapsList, setLapsList] = useState([]);
  const [showLaps, setShowLaps] = useState(false);
  const [showLapThresholdWarning, setShowLapThresholdWarning] = useState(false);
  const styles = useStyles({ isRunning });
  // eslint-disable-next-line
  useEffect(() => {
    let interval;
    if (isRunning) {
      const newCountDownTime = countDownTime - 1000;
      interval = setInterval(() => {
        setCountDownTime(newCountDownTime);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  });
  useEffect(() => {
    const {
      countDownTime: countDownTimeFromLastSession,
      isRunning: isRunningFromLastSession,
    } = getTimeFromLocalStoreage();
    if (countDownTimeFromLastSession) {
      setCountDownTime(countDownTimeFromLastSession);
      setStartTime(countDownTimeFromLastSession);
      setIsRunning(isRunningFromLastSession === 'true' ? true : false);
    }
  }, []);
  useEffect(() => {
    if (isRunning && lapStarted) {
      const currentLapDration = lapStartTime - countDownTime;
      if (currentLapDration === lapThreshold) {
        toggleShowLapThresholdWarning();
      }
    } else if (countDownTime) {
      setTimeInLocalStorage(countDownTime);
    }
  }, [countDownTime]);
  useEffect(() => {
    setIsRunningInLocalStorage(isRunning);
  }, [isRunning]);
  useEffect(() => {
    if (lapEndTime) {
      const lapDuration = lapStartTime - lapEndTime;
      const totalLaps = lapsList.length || 0;
      setLapsList(state => {
        if (totalLaps === 0) {
          return [
            {
              lapDuration,
              lapStartTime,
              lapEndTime,
              index: totalLaps + 1,
            },
          ];
        }
        return [
          ...state,
          {
            lapDuration,
            lapStartTime,
            lapEndTime,
            index: totalLaps + 1,
          },
        ];
      });
    }
  }, [lapEndTime]);
  const miliSeconds = useMemo(() => {
    return getPaddedNumberWithZero({
      number: Math.round((countDownTime - Math.floor(countDownTime)) * 1000),
      paddedNumber: 3,
    });
  }, [countDownTime]);
  function onChangeCountDownTime({ columnType, changeType }) {
    if (changeType === 'increment') {
      if (columnType === 'hours' && countDownTime + 3600000 < 216000000) {
        setCountDownTime(state => state + 3600000);
      } else if (
        columnType === 'minutes' &&
        countDownTime + 60000 < 216000000
      ) {
        setCountDownTime(state => state + 60000);
      } else if (columnType === 'seconds' && countDownTime + 1000 < 216000000) {
        setCountDownTime(state => state + 1000);
      }
    } else if (changeType === 'decrement') {
      if (columnType === 'hours' && countDownTime - 3600000 >= 0) {
        setCountDownTime(state => state - 3600000);
      } else if (columnType === 'minutes' && countDownTime - 60000 >= 0) {
        setCountDownTime(state => state - 60000);
      } else if (columnType === 'seconds' && countDownTime - 1000 >= 0) {
        setCountDownTime(state => state - 1000);
      }
    }
  }
  function onStart() {
    setCountDownTime(countDownTime - 1000);
    setStartTime(countDownTime);
    setIsRunning(true);
  }
  function onPause() {
    if (isRunning) {
      setStartTime(countDownTime);
      setCountDownTime(countDownTime);
      setIsRunning(false);
    }
  }
  function onResume() {
    setStartTime(countDownTime);
    setIsRunning(true);
  }
  function onStop() {
    setCountDownTime(0);
    setStartTime(0);
    setIsRunning(false);
    setShowLaps(true);
  }
  function handleKeyDownEvent({ key }) {
    if (key === 'space') {
      if (lapStarted) {
        setLapEndTime(countDownTime);
        setLapStarted(false);
      } else {
        setLapStarted(true);
        setLapStartTime(countDownTime);
      }
    } else if (key === 'backspace' && !lapStarted) {
      const lastLap = lapsList[lapsList.length - 1];
      const { index: lastLapIndex, lapStartTime: lastLapStartTime } =
        lastLap || {};
      setLapStarted(true);
      setLapStartTime(lastLapStartTime);
      lapsList.splice(lastLapIndex - 1, 1);
    }
  }
  function toggleShowLapThresholdWarning() {
    setShowLapThresholdWarning(state => !state);
  }
  function toggleShowLaps() {
    setShowLaps(state => !state);
    setLapsList([]);
  }
  return (
    <>
      <KeyboardEventHandler
        isDisabled={!isRunning}
        handleKeys={['backspace', 'space']}
        onKeyEvent={(key, event) => handleKeyDownEvent({ key, event })}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={1}
        my={2}
      >
        <CountDownColumn
          countDownTime={countDownTime}
          columnType="hours"
          onChangeCountDownTime={onChangeCountDownTime}
          isRunning={isRunning}
        />
        <Box mt={3}>
          <Typography variant="h3">:</Typography>
        </Box>
        <CountDownColumn
          countDownTime={countDownTime}
          columnType="minutes"
          onChangeCountDownTime={onChangeCountDownTime}
          isRunning={isRunning}
        />
        <Box mt={3}>
          <Typography variant="h3">:</Typography>
        </Box>
        <CountDownColumn
          countDownTime={countDownTime}
          columnType="seconds"
          onChangeCountDownTime={onChangeCountDownTime}
          isRunning={isRunning}
        />
        <Box minWidth={70} mt={5}>
          <Typography variant="caption">miliseconds</Typography>
          <Typography variant="h5">. {miliSeconds}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" my={2} mr={6}>
        {!isRunning && countDownTime > 0 && countDownTime !== startTime && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary" onClick={onStart}>
              <PlayCircleFilledIcon
                fontSize="large"
                classes={{ root: styles.iconRoot }}
              />
            </IconButton>
            <Typography variant="subtitle2">Start</Typography>
          </Box>
        )}
        {isRunning && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary" onClick={onPause}>
              <PauseCircleFilledIcon
                fontSize="large"
                classes={{ root: styles.iconRoot }}
              />
            </IconButton>
            <Typography variant="subtitle2">Pause</Typography>
          </Box>
        )}
        {!isRunning && countDownTime > 0 && countDownTime === startTime && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary" onClick={onResume}>
              <PlayCircleFilledIcon
                fontSize="large"
                classes={{ root: styles.iconRoot }}
              />
            </IconButton>
            <Typography variant="subtitle2">Resume</Typography>
          </Box>
        )}
        {isRunning && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary" onClick={onStop}>
              <StopIcon fontSize="large" classes={{ root: styles.iconRoot }} />
            </IconButton>
            <Typography variant="subtitle2">Stop</Typography>
          </Box>
        )}
      </Box>
      {!isRunning && !isEmpty(lapsList) && showLaps && (
        <LapsModal
          open={showLaps}
          handleClose={toggleShowLaps}
          laps={lapsList}
        />
      )}
      {showLapThresholdWarning && (
        <ThresholdWarning
          open={setShowLapThresholdWarning}
          handleClose={toggleShowLapThresholdWarning}
        />
      )}
    </>
  );
}

export default CountDown;
