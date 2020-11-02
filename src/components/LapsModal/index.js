import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import LapsModalTable from './Table';

function LapsModal({ laps, open, handleClose }) {
  return (
    <Dialog maxWidth="lg" onClose={handleClose} open={open}>
      <DialogTitle onClose={handleClose}>Laps Recorded</DialogTitle>
      <DialogContent dividers>
        {isEmpty(laps) ? (
          <Box minWidth={500} display="flex" justifyContent="center">
            <Typography>No Laps Recorded</Typography>
          </Box>
        ) : (
          <LapsModalTable laps={laps} showPagination />
        )}
      </DialogContent>
      <DialogActions>
        <Box mx={2}>
          <Button
            size="large"
            variant="outlined"
            onClick={handleClose}
            color="primary"
          >
            Ok
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

LapsModal.propTypes = {
  laps: PropTypes.array,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default LapsModal;
