import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteButton from '../buttons/DeleteButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'transparent',
    color: 'white'
  },
  icon: {
    color: 'white'
  }
}));

const contacts = [
  {
    name: "Mom",
    number: "123-456-7890"
  },
  {
    name: "Sister",
    number: "123-456-7890"
  },
  {
    name: "Dad",
    number: "123-456-7890"
  }
];

export default function ContactList(props) {
  const classes = useStyles();
  const selected = props.selected;

  return (
    <div className={classes.root}>
      { contacts.map(contact => {
        return (
          <div>
            <List component="nav" aria-label={contact.name}>
              <ListItem button >
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} fontSize="large"/>
                </ListItemIcon>
                <ListItemText className={classes.icon} primary={contact.name} secondary={contact.number} />
                { selected ? <DeleteButton /> : null}
              </ListItem>
            </List>
            <Divider />
          </div>
        )
      })}
    </div>
  );
}