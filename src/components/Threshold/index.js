import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function ThresholdWarning({ open, handleClose }) {
  return (
    <Dialog open={open} maxWidth="sm">
      <DialogTitle>Warning</DialogTitle>
      <DialogContent dividers>
        <Typography align="justify">
          Current Lap has reached a threshold of <strong>1 minute</strong>.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Box mx={2}>
          <Button
            size="large"
            variant="outlined"
            onClick={handleClose}
            color="primary"
          >
            Got It
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default ThresholdWarning;
