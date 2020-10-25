import React, { useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
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

const lapThreshold = 120000;

function CountDown() {
  const { enqueueSnackbar } = useSnackbar();
  const [countDownTime, setCountDownTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapStarted, setLapStarted] = useState(false);
  const [lapStartTime, setLapStartTime] = useState(0);
  const [lapsList, setLapsList] = useState([]);
  const [showLaps, setShowLaps] = useState(false);
  const styles = useStyles({ isRunning });
  useEffect(() => {
    let interval;
    if (isRunning) {
      const newCountDownTime = countDownTime - 18;
      interval = setInterval(() => {
        setCountDownTime(newCountDownTime);
      }, 10);
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
    if (isRunning) {
      const currentLapDration = lapStartTime - countDownTime;
      if (currentLapDration >= lapThreshold) {
        enqueueSnackbar('1 Minutes Lap threshold reached', {
          variant: 'warning',
          preventDuplicate: true,
        });
      }
    } else if (countDownTime) {
      setTimeInLocalStorage(countDownTime);
    }
  }, [countDownTime]);
  useEffect(() => {
    setIsRunningInLocalStorage(isRunning);
  }, [isRunning]);
  useEffect(() => {
    if (lapStarted) {
      const totalLaps = lapsList.length || 0;
      const lastLap = !isEmpty(lapsList) ? lapsList[lapsList.length - 1] : {};
      const { index: lastLapIndex, lapStartTime: lastLapStartTime } =
        lastLap || {};
      const lapDuration = lastLapStartTime - countDownTime;
      if (!isEmpty(lastLap)) {
        lapsList.splice(lastLapIndex - 1, 1);
        lapsList.splice(lastLapIndex - 1, 0, {
          lapDuration,
          lapStartTime: lastLapStartTime,
          lapEndTime: countDownTime,
          index: lastLapIndex,
        });
      }
      lapsList.push({ index: totalLaps + 1, lapStartTime: countDownTime });
      setLapsList(lapsList);
      if (totalLaps > 0) {
        enqueueSnackbar(
          `Lap ${totalLaps} Ended, Starting Lap ${totalLaps + 1}`,
          {
            variant: 'info',
            preventDuplicate: true,
          },
        );
      } else {
        enqueueSnackbar(`Lap ${totalLaps + 1} Started`, {
          variant: 'info',
          preventDuplicate: true,
        });
      }
      setLapStarted(false);
    }
  }, [lapStarted]);
  const miliSeconds = useMemo(() => {
    return getPaddedNumberWithZero({
      number: countDownTime % 1000,
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
    setTimeInLocalStorage(0);
    // setting the time for the last lap
    const lastLap = !isEmpty(lapsList) ? lapsList[lapsList.length - 1] : {};
    const { index: lastLapIndex, lapStartTime: lastLapStartTime } =
      lastLap || {};
    const lapDuration = lastLapStartTime - countDownTime;
    if (!isEmpty(lastLap)) {
      lapsList.splice(lastLapIndex - 1, 1);
      lapsList.splice(lastLapIndex - 1, 0, {
        lapDuration,
        lapStartTime: lastLapStartTime,
        lapEndTime: countDownTime,
        index: lastLapIndex,
      });
    }
  }
  function handleKeyDownEvent({ key }) {
    if (key === 'space') {
      setLapStarted(true);
      setLapStartTime(countDownTime);
    } else if (
      key === 'backspace' &&
      !isEmpty(lapsList) &&
      lapsList.length > 1
    ) {
      const lastLap = lapsList[lapsList.length - 1];
      const { index: lastLapIndex } = lastLap || {};
      enqueueSnackbar(
        `Deleting Lap ${lapsList.length}, Continuing Lap ${
          lapsList.length - 1
        }`,
        {
          variant: 'success',
          preventDuplicate: true,
        },
      );
      lapsList.splice(lastLapIndex - 1, 1);
      setLapsList(lapsList);
    }
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
        my={2}
        ml={9}
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
      <Box display="flex" justifyContent="center" my={2}>
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
      {isRunning && (
        <Typography variant="body1">Press Space Bar to record Laps</Typography>
      )}
      {showLaps && (
        <LapsModal
          open={showLaps}
          handleClose={toggleShowLaps}
          laps={lapsList}
        />
      )}
    </>
  );
}

export default CountDown;
