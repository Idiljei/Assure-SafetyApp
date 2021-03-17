import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'transparent',
    color: 'white'
  },
  icon: {
    color: 'white'
  }
}));

export default function UserInfoList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="user info">
        <ListItem>
          <ListItemIcon>
            <PhoneIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={props.number}/>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CakeIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={props.dob} />
        </ListItem>
      </List>
    </div>
  );
}