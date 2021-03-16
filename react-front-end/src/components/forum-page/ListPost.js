import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListPost(props) {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary={props.title} secondary={props.address} />
          <ListItemText primary={props.description} secondary={props.user}/>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}