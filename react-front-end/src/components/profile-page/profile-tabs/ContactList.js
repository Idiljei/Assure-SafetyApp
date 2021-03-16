import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@material-ui/core';
import EditDeleteButton from '../buttons/EditDeleteButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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

export default function ContactList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { contacts.map(contact => {
        return (
          <div>
            <List component="nav" aria-label={contact.name}>
              <ListItem button >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={contact.name} secondary={contact.number} />
                <Box marginLeft="2%">
                  <EditDeleteButton />
                </Box>
              </ListItem>
            </List>
            <Divider />
          </div>
        )
      })}
    </div>
  );
}