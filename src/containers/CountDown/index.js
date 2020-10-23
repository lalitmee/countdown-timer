import React, { useEffect, useMemo, useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';

import CountDownColumn from 'components/CountDown/Column';
import { getPaddedNumberWithZero } from 'utils/helper';

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
  const [countDownTime, setCountDownTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // const [miliSeconds, setMiliSeconds] = useState('00');
  const styles = useStyles({ isRunning });
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
  // eslint-disable-next-line
  useEffect(() => {
    let interval;
    if (isRunning) {
      setStartTime(countDownTime);
      interval = setInterval(() => {
        setCountDownTime(state => state - 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  });
  function onStart() {
    setStartTime(countDownTime);
    setCountDownTime(state => state - 100);
    setIsRunning(true);
  }
  function onPause() {
    setIsRunning(false);
  }
  function onResume() {
    setIsRunning(true);
  }
  function onReset() {
    setCountDownTime(0);
    setStartTime(0);
    setIsRunning(false);
  }

  const miliSeconds = useMemo(() => {
    return getPaddedNumberWithZero(Math.floor(countDownTime / 10) % 100);
  }, [countDownTime]);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={1}
        my={3}
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
        {!isRunning && startTime > 0 && countDownTime !== 0 && (
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
            <IconButton color="primary" onClick={onPause}>
              <StopIcon fontSize="large" classes={{ root: styles.iconRoot }} />
            </IconButton>
            <Typography variant="subtitle2">Stop</Typography>
          </Box>
        )}
        {countDownTime !== 0 && (
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
    </>
  );
}

export default CountDown;
