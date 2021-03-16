import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Post = (props) => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem button>
          <ListItemText primary={props.title} secondary={props.location} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Post;