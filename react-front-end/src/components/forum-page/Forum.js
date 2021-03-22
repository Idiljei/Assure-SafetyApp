import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import CreatePost from "./CreatePost";
import postStyles from "./PostStyles";
import Post from "./Post";
import "./forum.css";

const Forum = (props) => {
  const classes = postStyles();
  const [ allPosts, setAllPosts ] = useState([]);
  const [ title, setTitle ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ date, setDate ] = useState(null);
  const [ incident_type, setIncidentType ] = useState(null);
  const [ error, setError ] = useState("");

  const makePost = async () => {
    try {
      const user_id = 3;
      const body = { user_id, incident_type, description, address, title, date };
      const response = await fetch(`http://localhost:8080/forum`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/forum";
    } catch (err) {
      console.error(err.message);
    }
  };

  // validate
  const validateForm = () => {
    if (!description) {
      setError("Description required");
      return;
    }
    if (!title) {
      setError("Title required");
      return;
    }
    if (!address) {
      setError("Address required");
      return;
    }
    if (!date) {
      setError("Date required");
      return;
    }
    setError("");
    makePost();
  };

  //  Reset Function
  const reset = () => {
    setTitle("");
    setAddress("");
    setDescription("");
    setError("");
  };
  
  // validate takes in an object
  const handleClose = () => {
    reset();
    props.setNewPost(false);
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
    <Box className={classes.paper}>
      { props.newPost ? (
          <CreatePost
            open={props.newPost}
            setTitle={setTitle}
            setAddress={setAddress}
            setDescription={setDescription}
            onSubmitForm={validateForm}
            close={handleClose}
            setDate={setDate}
            date={date}
            setType={setIncidentType}
            type={incident_type}
            error={error}
          />
        ) : null }
    </Box>

    <div>
    { allPosts.map((post) => {
        return (
          <Box className={classes.hover}>
            <div key={post.title + post.address + post.date}>
              <Post
                title={post.title}
                address={post.address}
                description={post.description}
                date={post.date}
                user={post.first_name + " " + post.last_name}
                type={post.incident_type}
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