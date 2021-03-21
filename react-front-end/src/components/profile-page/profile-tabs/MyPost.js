import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, List, ListItem, ListItemText, Box } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from "@material-ui/core";

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
  const [open, setOpen] = useState(false);
  const [deletedPost, setDeletedPost] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePost = async (id) => {
    try {
      const deletePost = await fetch(`http://localhost:8080/forum/${id}`, {
        method: "DELETE",
      });
      setMyPosts(myPosts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

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

  return (
    <div>
      {myPosts.map((post) => (
        <div className={classes.root}>
          <div>
            <List key={post.id}>
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
                          handleClickOpen();
                          setDeletedPost(post.id);
                        }}
                      />
                    </IconButton>
                  </div>
                ) : null}
              </Box>
            </List>
            <Divider />
          </div>

          <div>
            {open ? (
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">CONFIRM</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    color="primary"
                    onClick={() => {
                      handleClose();
                      deletePost(deletedPost);
                    }}
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
