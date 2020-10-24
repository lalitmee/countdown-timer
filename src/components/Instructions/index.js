import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { THEME_COLORS } from 'utils/constants';

const useStyles = makeStyles(() => ({
  listItem: {
    alignItems: 'baseline',
  },
  icon: {
    color: THEME_COLORS.BLACK,
    minWidth: 25,
  },
}));

function Instructions({ open, handleClose }) {
  const styles = useStyles();
  return (
    <Dialog open={open} maxWidth="sm">
      <DialogTitle>Instructions For Recording Laps:</DialogTitle>
      <DialogContent dividers>
        <List>
          <ListItem className={styles.listItem}>
            <ListItemIcon className={styles.icon}>&#9642;</ListItemIcon>
            <ListItemText>
              <Typography align="justify">
                You can record a Lap by pressing <strong>Space Bar</strong> key
                on the keyboard while the countdown timer is running.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem className={styles.listItem}>
            <ListItemIcon className={styles.icon}>&#9642;</ListItemIcon>
            <ListItemText>
              <Typography align="justify">
                If you pressed <strong>Space Bar</strong> while a lap is running
                then you can press <strong>Back Space</strong> key to correct
                that lap and your last lap will continue from there.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
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

export default Instructions;
