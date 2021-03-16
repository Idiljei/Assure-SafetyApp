import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EditButton from '../buttons/EditButton';
import PhoneIcon from '@material-ui/icons/Phone';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserInfoList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="user info">
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={props.number} />
          <EditButton />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CakeIcon />
          </ListItemIcon>
          <ListItemText primary={props.dob} />
          <EditButton />
        </ListItem>
      </List>
    </div>
  );
}