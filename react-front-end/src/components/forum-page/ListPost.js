import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

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