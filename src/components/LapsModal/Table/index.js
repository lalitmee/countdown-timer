import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

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

function LapsModalTable({ laps, showPagination = false }) {
  const styles = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const lapsList = showPagination
    ? laps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : laps;
  function handleChangePage(_, newPage) {
    setPage(newPage);
  }
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  return (
    <Paper className={styles.paper}>
      <TableContainer className={showPagination ? styles.tableContainer : ''}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" className={styles.tableCellHead}>
                <Typography variant="subtitle2" className={styles.tableHeader}>
                  No.
                </Typography>
              </TableCell>
              <TableCell align="center" className={styles.tableCellHead}>
                <Typography variant="subtitle2" className={styles.tableHeader}>
                  Start Time
                </Typography>
              </TableCell>
              <TableCell align="center" className={styles.tableCellHead}>
                <Typography variant="subtitle2" className={styles.tableHeader}>
                  End Time
                </Typography>
              </TableCell>
              <TableCell align="center" className={styles.tableCellHead}>
                <Typography variant="subtitle2" className={styles.tableHeader}>
                  Duration
                </Typography>
              </TableCell>
              {showPagination && (
                <TableCell align="center" className={styles.tableCellHead}>
                  <Typography
                    variant="subtitle2"
                    className={styles.tableHeader}
                  >
                    Threshold Reached
                  </Typography>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(laps) &&
              lapsList.map(lap => {
                const {
                  index,
                  lapStartTime,
                  lapEndTime,
                  lapDuration,
                  lapThresholdReached = false,
                } = lap || {};
                return (
                  <TableRow key={index} className={styles.tableRow}>
                    <TableCell align="center" component="th" scope="row">
                      <Typography variant="subtitle2">
                        <strong>{index}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2" color="primary">
                        {formatTime(lapStartTime)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2" color="primary">
                        {isNaN(lapEndTime) ? 'Running' : formatTime(lapEndTime)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2" color="primary">
                        {isNaN(lapDuration)
                          ? 'Running'
                          : formatTime(lapDuration)}
                      </Typography>
                    </TableCell>
                    {showPagination && (
                      <TableCell align="center">
                        {lapThresholdReached && (
                          <Tooltip title="Lap Threshold Reached">
                            <CancelOutlinedIcon color="error" />
                          </Tooltip>
                        )}
                        {!lapThresholdReached && (
                          <CheckCircleOutlineOutlinedIcon color="primary" />
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {showPagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={laps.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}

LapsModalTable.propTypes = {
  laps: PropTypes.array,
};

export default LapsModalTable;
