import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, List, ListItem, ListItemText, Box } from "@material-ui/core";
import DeleteButton from '../buttons/DeleteButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: 'white'
  },
}));

export default function MyPosts(props) {
  const classes = useStyles();
  const [myPosts, setMyPosts] = useState([]);
  const selected = props.selected;

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
              <Box display="flex" alignItems="center">
                <ListItem button>
                  <ListItemText primary={post.title} secondary={post.date} />
                </ListItem>
                
                { selected ? <DeleteButton /> : null}

              </Box>
            </List>
            <Divider />
          </div>
        );
      })}
    </div>
  );
}
