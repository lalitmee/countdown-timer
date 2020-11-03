import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import isEmpty from 'lodash/isEmpty';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import StopIcon from '@material-ui/icons/Stop';
import DeleteIcon from '@material-ui/icons/Delete';

import CountDownColumn from 'components/CountDown/Column';
import LapsModal from 'components/LapsModal';
import LapThreshold from 'components/Threshold';
import LapsModalTable from 'components/LapsModal/Table';
import {
  getPaddedNumberWithZero,
  setTimeInLocalStorage,
  setIsRunningInLocalStorage,
  getTimeFromLocalStoreage,
} from 'utils/helper';
import * as globalConstants from 'utils/constants';

const { THEME_COLORS } = globalConstants;

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

function CountDown() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [countDownTime, setCountDownTime] = useState(0);
  const countDownTimeRef = useRef();
  const [startTime, setStartTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapStarted, setLapStarted] = useState(false);
  const [lapStartTime, setLapStartTime] = useState(0);
  const [lapThreshold, setLapThreshold] = useState(40000);
  const [lapsList, setLapsList] = useState([]);
  const [showLapsModal, setShowLapsModal] = useState(false);
  const [showLapThresholdModal, setShowLapThresholdModal] = useState(false);
  const styles = useStyles({ isRunning });
  useEffect(() => {
    let interval;
    if (isRunning) {
      const newCountDownTime = countDownTime - 100;
      interval = setInterval(() => {
        setCountDownTime(newCountDownTime);
      }, 100);
    }
    return () => clearInterval(interval);
  });

  // getting the stored state of the timer from localstorage
  useEffect(() => {
    const beforeUnload = () => {
      setTimeInLocalStorage({ time: countDownTimeRef.current, lapThreshold });
    };
    const {
      countDownTime: countDownTimeFromLastSession,
      isRunning: isRunningFromLastSession,
      lapThreshold: lapThresholdFromLastSession,
    } = getTimeFromLocalStoreage();
    if (countDownTimeFromLastSession) {
      setCountDownTime(Number(countDownTimeFromLastSession));
      setStartTime(Number(countDownTimeFromLastSession));
      setIsRunning(isRunningFromLastSession === 'true' ? true : false);
      setLapThreshold(Number(lapThresholdFromLastSession));
    }
    window.addEventListener('beforeunload', beforeUnload);
    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, []);

  useEffect(() => {
    countDownTimeRef.current = countDownTime;
    const currentLapDuration = lapStartTime - countDownTime;
    if (isRunning && currentLapDuration >= lapThreshold) {
      const currentLap = lapsList[lapsList.length - 1];
      const { index } = currentLap || {};
      lapsList.splice(index - 1, 1);
      lapsList.splice(index - 1, 0, {
        ...currentLap,
        lapThresholdReached: true,
      });
      enqueueSnackbar('Lap threshold reached', {
        variant: 'warning',
        preventDuplicate: true,
        action,
      });
      setLapsList(lapsList);
    }
  }, [countDownTime]);

  const action = key => (
    <Button
      onClick={() => {
        closeSnackbar(key);
      }}
    >
      Ok
    </Button>
  );

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
          ...lastLap,
          lapDuration,
          lapStartTime: lastLapStartTime,
          lapEndTime: countDownTime,
          index: lastLapIndex,
        });
      }
      lapsList.push({
        index: totalLaps + 1,
        lapStartTime: countDownTime,
        lapDuration: 'Running',
        lapEndTime: 'Running',
      });
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

  function onLapThresholdChange(event) {
    setLapThreshold(event.target.value);
  }

  function showLapsTable() {
    if (!isEmpty(lapsList)) {
      return true;
    }
    return false;
  }

  function onChangeCountDownTime({ columnType, changeType }) {
    const time = Math.round(Number(countDownTime));
    if (changeType === 'increment') {
      if (columnType === 'hours' && time + 3600000 < 216000000) {
        setCountDownTime(state => state + 3600000);
      } else if (columnType === 'minutes' && time + 60000 < 216000000) {
        setCountDownTime(state => state + 60000);
      } else if (columnType === 'seconds' && time + 1000 < 216000000) {
        setCountDownTime(state => state + 1000);
      }
    } else if (changeType === 'decrement') {
      if (columnType === 'hours' && time - 3600000 >= 0) {
        setCountDownTime(state => state - 3600000);
      } else if (columnType === 'minutes' && time - 60000 >= 0) {
        setCountDownTime(state => state - 60000);
      } else if (columnType === 'seconds' && time - 1000 >= 0) {
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

  function onReset() {
    setCountDownTime(0);
    setStartTime(0);
    setIsRunning(false);
    setTimeInLocalStorage({ time: 0, lapThreshold: 40000 });
    setLapsList([]);
  }

  function onStop() {
    setCountDownTime(0);
    setStartTime(0);
    setIsRunning(false);
    setShowLapsModal(true);
    setTimeInLocalStorage({ time: 0, lapThreshold: 40000 });
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
      setLapStartTime(countDownTimeRef.current);
    } else if (key === 'backspace' && !isEmpty(lapsList)) {
      if (lapsList.length === 1) {
        enqueueSnackbar(`Deleting Lap ${lapsList.length}`, {
          variant: 'success',
          preventDuplicate: true,
        });
        setLapsList([]);
      } else {
        enqueueSnackbar(
          `Deleting Lap ${lapsList.length}, Continuing Lap ${
            lapsList.length - 1
          }`,
          {
            variant: 'success',
            preventDuplicate: true,
          },
        );
        const lastLap = lapsList[lapsList.length - 2];
        const currentLap = lapsList[lapsList.length - 1];
        const { index: currentLapIndex } = currentLap || {};
        const { index: lastLapIndex, lapStartTime } = lastLap || {};
        lapsList.splice(lastLapIndex - 1, 1);
        lapsList.splice(lastLapIndex - 1, 0, {
          index: lastLapIndex,
          lapStartTime,
          lapEndTime: 'Running',
          lapDuration: 'Running',
        });
        lapsList.splice(currentLapIndex - 1, 1);
        setLapsList(lapsList);
      }
    }
  }
  function toggleShowLapsModal() {
    setShowLapsModal(state => !state);
    setLapsList([]);
  }
  function toggleShowLapThresholdModal() {
    setShowLapThresholdModal(state => !state);
  }
  return (
    <>
      <KeyboardEventHandler
        isDisabled={!isRunning}
        handleKeys={['backspace', 'space']}
        onKeyEvent={(key, event) => handleKeyDownEvent({ key, event })}
      />
      <Box
        position="sticky"
        bgcolor={THEME_COLORS.BACKGROUND_WHITE}
        width={1}
        top={10}
        zIndex={100}
        py={2}
      >
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
                <StopIcon
                  fontSize="large"
                  classes={{ root: styles.iconRoot }}
                />
              </IconButton>
              <Typography variant="subtitle2">Stop</Typography>
            </Box>
          )}
          {!isRunning && countDownTime > 0 && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton color="primary" onClick={onReset}>
                <DeleteIcon
                  fontSize="large"
                  classes={{ root: styles.iconRoot }}
                />
              </IconButton>
              <Typography variant="subtitle2">Reset</Typography>
            </Box>
          )}
        </Box>
        {isRunning && (
          <Typography align="center" variant="body1">
            Press Space Bar to record Laps
          </Typography>
        )}
        <Box display="flex" justifyContent="center" my={1}>
          <Button variant="outlined" onClick={toggleShowLapThresholdModal}>
            Lap Threshold
          </Button>
        </Box>
      </Box>
      {showLapThresholdModal && (
        <LapThreshold
          open={showLapThresholdModal}
          handleClose={toggleShowLapThresholdModal}
          lapThreshold={lapThreshold}
          onLapThresholdChange={onLapThresholdChange}
        />
      )}
      {showLapsTable() && (
        <Box my={2}>
          <LapsModalTable laps={lapsList} />
        </Box>
      )}
      {showLapsModal && (
        <LapsModal
          open={showLapsModal}
          handleClose={toggleShowLapsModal}
          laps={lapsList}
        />
      )}
    </>
  );
}

export default CountDown;
