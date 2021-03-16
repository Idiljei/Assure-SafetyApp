import React, { useState, useEffect } from "react";
import { Box, Fab, Tooltip, Backdrop } from "@material-ui/core";
import FilterButton from "./FilterButton";
import AddIcon from "@material-ui/icons/Add";
import CreatePost from "./CreatePost";
import postStyles from "./PostStyles";
import Post from "./Post";
import "./forum.css";

const Forum = () => {
  const classes = postStyles();
  const [allPosts, setAllPosts] = useState([]); // list of all the posts
  const [selected, setSelected] = useState(false); // add button --> true

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const handleClose = () => {
    setSelected(false);
  };

  // const addPost = () => {
  //   const postData = {
  //     title,
  //     user,
  //     location,
  //     description
  //   };

  //   setAllPosts((prev) => {
  //     return [...prev, postData]
  //   })
  //   setSelected(false);
  // };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description, address, title, date };
      const response = await fetch(`http://localhost:8080/forum`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("this is body", body)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
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
    <div class="forum-page">
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Box display="flex" className={classes.filterButton} justifyContent="flex-end" alignItems="center" width="50%">
          <FilterButton />
          <div class="add-button">
            <Tooltip title="Add" aria-label="add">
              <Fab
                onClick={() => setSelected(true)}
                color="primary"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Tooltip>
            <Box className={classes.paper}>
              <Backdrop className={classes.backdrop} open={selected}>
                <Box display="flex">
                    {selected ? (
                      <CreatePost
                        setTitle={setTitle}
                        setAddress={setAddress}
                        setDescription={setDescription}
                        onSubmitForm={onSubmitForm}
                        close={handleClose}
                        setDate={setDate}
                      />
                    ) : null}
                </Box>
              </Backdrop>
            </Box>
          </div>
        </Box>

        <Box width="50%">
          {allPosts.map((post) => {
            return (
              <Box className={classes.postBox}>
                <div key={post.title + post.address}>
                  <Post
                    title={post.title}
                    address={post.address}
                    description={post.description}
                    date={post.date}
                  />
                </div>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default Forum;
