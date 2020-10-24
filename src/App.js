import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import CountDown from 'containers/CountDown';
import Instructions from 'components/Instructions';

function App() {
  const [openInstructions, setOpenInstructions] = useState(false);
  function toggleOpenInstructions() {
    setOpenInstructions(state => !state);
  }
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
      <IconButton onClick={toggleOpenInstructions}>
        <InfoOutlinedIcon fontSize="large" />
      </IconButton>
      {openInstructions && (
        <Instructions
          open={openInstructions}
          handleClose={toggleOpenInstructions}
        />
      )}
      <Box my={2}>
        <CountDown />
      </Box>
    </Box>
  );
}

export default App;
