import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteButton from "../buttons/DeleteButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "transparent",
    color: "white",
  },
  icon: {
    color: "white",
  },
}));

const contacts = [
  {
    name: "Mom",
    number: "123-456-7890",
  },
  {
    name: "Sister",
    number: "123-456-7890",
  },
  {
    name: "Dad",
    number: "123-456-7890",
  },
];

export default function ContactList(props) {
  const classes = useStyles();
  const selected = props.selected;
  const [networks, setNetwork] = useState([]);

  const getNetwork = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/safetynetwork/${id}`);
      const jsonData = await response.json();

      setNetwork(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getNetwork();
  }, []);

  return (
    <div className={classes.root}>
      {networks.map((network) => {
        return (
          <div>
            <List
              component="nav"
              aria-label={network.first_name + network.last_name}
            >
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon
                    className={classes.icon}
                    fontSize="large"
                  />
                </ListItemIcon>
                <ListItemText
                  className={classes.icon}
                  primary={network.first_name + " " + network.last_name}
                  secondary={network.phone_number}
                />
                {selected ? <DeleteButton /> : null}
              </ListItem>
            </List>
            <Divider />
          </div>
        );
      })}
    </div>
  );
}
