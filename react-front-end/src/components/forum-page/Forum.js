import React, { useState, useEffect } from "react";
import { Box, Fab, Tooltip } from "@material-ui/core";
import FilterButton from "./FilterButton";
import AddIcon from "@material-ui/icons/Add";
import CreatePost from "./CreatePost";
import postStyles from "./PostStyles";
import Post from "./Post";
import "./forum.css";

const Forum = () => {
  const classes = postStyles();
  const [allPosts, setAllPosts] = useState([]);
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState("");

  const makePost = async () => {
  try {
    const user_id = 3;
    const body = { user_id, description, address, title, date };
    const response = await fetch(`http://localhost:8080/forum`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error(err.message);
  }
  }
  // validate 
  const validateForm = () => {
    if (!title  && !address && !description) {
      setError("Please enter a title, address, description and date to post your incident");
      return;
    }
    if (!description) {
        setError("Description required");
        return;
    }
    setError("")
    makePost()
  }

  //  Reset Function 
  const reset = () =>  {
    setTitle("");
    setAddress("");
    setDescription("")
    setError("")
  }
  // validate takes in an object 
  const handleClose = () => {
      reset();
      setSelected(false);
  };

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:8080/forum");
      const jsonData = await response.json();

      setAllPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();

  }, []);

  return (
    <div className="forum-box">
      <Box className={classes.filterButton}>
        <FilterButton />
        <div class="add-button">
          <Tooltip title="Create Post" aria-label="add" arrow>
            <Fab
              onClick={() => setSelected(true)}
              color="primary"
              aria-label="Create Post"
            >
              <AddIcon />
            </Fab>
          </Tooltip>

          <Box className={classes.paper}>
            { selected ? (
                <CreatePost
                  open={selected}
                  setTitle={setTitle}
                  setAddress={setAddress}
                  setDescription={setDescription}
                  onSubmitForm={validateForm}
                  close={handleClose}
                  setDate={setDate}
                />
              ) : null}
          </Box>
        </div>
      </Box>

      <div>
        {allPosts.map((post) => {
          return (
            <Box className={classes.hover}>
              <div key={post.title + post.address + post.date}>
                <Post
                  title={post.title}
                  address={post.address}
                  description={post.description}
                  date={post.date}
                  user={post.first_name + " " + post.last_name}
                />
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default Forum;