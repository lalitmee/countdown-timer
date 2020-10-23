import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import CountDown from 'containers/CountDown';

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" color="primary" style={{ fontWeight: 500 }}>
        Countdown Timer
      </Typography>
      <Box my={2}>
        <CountDown />
      </Box>
    </Box>
  );
}

export default App;
