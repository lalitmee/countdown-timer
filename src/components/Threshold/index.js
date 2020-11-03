import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function LapThreshold({
  open,
  handleClose,
  lapThreshold,
  onLapThresholdChange,
}) {
  return (
    <Dialog open={open} maxWidth="sm">
      <DialogTitle>Lap Threshold</DialogTitle>
      <DialogContent dividers>
        <Typography align="justify">
          Set a minimum threshold for the lap so that if any lap exceeds that
          threshold, the timer will tell you about that with a visual
          indication.
        </Typography>
        <Box display="flex" justifyContent="center" my={2}>
          <TextField
            variant="outlined"
            label="Lap Threshold"
            defaultValue={40}
            value={lapThreshold}
            onChange={onLapThresholdChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">miliseconds</InputAdornment>
              ),
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Box mx={2}>
          <Button
            size="large"
            variant="outlined"
            onClick={handleClose}
            color="primary"
          >
            Confirm
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

LapThreshold.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  lapThreshold: PropTypes.number,
  onLapThresholdChange: PropTypes.func,
};

export default LapThreshold;
