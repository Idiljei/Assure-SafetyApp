import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, List, ListItem, ListItemText, Box } from "@material-ui/core";
import DeleteButton from "../buttons/DeleteButton";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "white",
  },
}));

export default function MyPosts(props) {
  const classes = useStyles();
  const [myPosts, setMyPosts] = useState([]);
  const selected = props.selected;

  const getPosts = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/forum/user/${id}`);
      const jsonData = await response.json();
      setMyPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const deletePosty = await fetch(`http://localhost:8080/forum/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.root}>
      {myPosts.map((post) => {
        // console.log(myPosts, myPosts[0].id);
        return (
          <div>
            <List>
              <Box display="flex" alignItems="center">
                <ListItem button>
                  <ListItemText
                    primary={post.title}
                    secondary={post.description}
                  />
                </ListItem>

                {selected ? (
                  <div>
                    <IconButton type="submit" aria-label="delete" size="small">
                      <DeleteIcon
                        onClick={() => {
                          deletePost(post.id);
                        }}
                      />
                    </IconButton>
                  </div>
                ) : null}
              </Box>
            </List>
            <Divider />
          </div>
        );
      })}
    </div>
  );
}
