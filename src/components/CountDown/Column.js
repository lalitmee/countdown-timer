import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { getPaddedNumberWithZero } from 'utils/helper';

function CountDownColumn({
  countDownTime,
  columnType,
  onChangeCountDownTime,
  isRunning,
}) {
  const value = useMemo(() => {
    switch (columnType) {
      case 'hours':
        return getPaddedNumberWithZero(
          Math.floor((countDownTime / 3600000) % 60),
        );
      case 'minutes':
        return getPaddedNumberWithZero(
          Math.floor((countDownTime / 60000) % 60),
        );
      case 'seconds':
        return getPaddedNumberWithZero(
          Math.floor((countDownTime / 1000) % 60) % 60,
        );
      default:
    }
  }, [columnType, countDownTime]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minWidth={100}
      m={2}
    >
      <Box my={1}>
        <Typography variant="caption">
          {columnType.charAt(0).toUpperCase() + columnType.slice(1)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        disabled={isRunning}
        onClick={() =>
          onChangeCountDownTime({ columnType, changeType: 'increment' })
        }
      >
        <ArrowUpwardIcon fontSize="large" />
      </Button>
      <Box display="flex" justifyContent="center" minWidth={80} my={1}>
        <Typography variant="h2">{value}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        disabled={isRunning}
        onClick={() =>
          onChangeCountDownTime({ columnType, changeType: 'decrement' })
        }
      >
        <ArrowDownwardIcon fontSize="large" />
      </Button>
    </Box>
  );
}

export default CountDownColumn;
