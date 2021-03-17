import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, List, ListItem, ListItemText, Box } from "@material-ui/core";
import EditDeleteButton from "../buttons/EditDeleteButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// const myPosts = [
//   {
//     title: "Theft at Restaurant",
//     user: "Monica Geller",
//     address: "Vancouver",
//     description: "Someone stole something",
//     date: "2019-01-12",
//   },
//   {
//     title: "Assault by Comic Book Store",
//     user: "Ross Geller",
//     address: "New York",
//     description: "Pheobe mugged me!",
//     date: "2023-04-02",
//   },
//   {
//     title: "Purse Stolen",
//     user: "Rachel Green",
//     address: "New York",
//     description: "Tall man in black hoodie stole my bag!",
//     date: "2012-11-00",
//   },
// ];

export default function MyPosts(props) {
  const classes = useStyles();
  const [myPosts, setMyPosts] = useState([]);

  const getPosts = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/forum/${id}`);
      const jsonData = await response.json();

      setMyPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={classes.root}>
      {myPosts.map((post) => {
        return (
          <div>
            <List>
              <ListItem button>
                <ListItemText primary={post.title} secondary={post.date} />
                <Box marginLeft="2%">
                  <EditDeleteButton />
                </Box>
              </ListItem>
            </List>
            <Divider />
          </div>
        );
      })}
    </div>
  );
}
