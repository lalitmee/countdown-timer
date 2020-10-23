import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function CountDownTimer(props) {
  const { hours, minutes, seconds } = props || {};
  return (
    <Box display="flex" justifyContent="center" alignItems="baseline" width={1}>
      <Typography variant="h2">{hours}</Typography>
      <Box mx={2}>
        <Typography variant="h2">:</Typography>
      </Box>
      <Typography variant="h2">{minutes}</Typography>
      <Box mx={2}>
        <Typography variant="h2">:</Typography>
      </Box>
      <Typography variant="h2">{seconds}</Typography>
    </Box>
  );
}

export default CountDownTimer;
