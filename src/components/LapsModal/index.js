import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { formatTime } from 'utils/helper';

const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: 900,
  },
  tableContainer: {
    maxHeight: 440,
  },
  tableHeader: {
    fontWeight: 500,
  },
  tableCellHead: {
    backgroundColor: theme.palette.grey[300],
  },
  tableFooter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

function LapsModal({ laps, open, handleClose }) {
  const styles = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  function handleChangePage(newPage) {
    setPage(newPage);
  }
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  return (
    <Dialog maxWidth="lg" onClose={handleClose} open={open}>
      <DialogTitle onClose={handleClose}>Laps Recorded</DialogTitle>
      <DialogContent dividers>
        <Paper className={styles.paper}>
          <TableContainer className={styles.tableContainer}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={styles.tableCellHead}>
                    <Typography
                      variant="subtitle2"
                      className={styles.tableHeader}
                    >
                      Lap No.
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={styles.tableCellHead}>
                    <Typography
                      variant="subtitle2"
                      className={styles.tableHeader}
                    >
                      Lap Start Time
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={styles.tableCellHead}>
                    <Typography
                      variant="subtitle2"
                      className={styles.tableHeader}
                    >
                      Lap End Time
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={styles.tableCellHead}>
                    <Typography
                      variant="subtitle2"
                      className={styles.tableHeader}
                    >
                      Lap Duration
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isEmpty(laps) &&
                  laps
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(lap => {
                      const { index, lapStartTime, lapEndTime, lapDuration } =
                        lap || {};
                      return (
                        <TableRow key={index} className={styles.tableRow}>
                          <TableCell align="center" component="th" scope="row">
                            <Typography variant="subtitle2">
                              <strong>{index}</strong>
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">
                              {formatTime(lapStartTime)}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">
                              {formatTime(lapEndTime)}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">
                              {formatTime(lapDuration)}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={laps.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
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

export default LapsModal;
