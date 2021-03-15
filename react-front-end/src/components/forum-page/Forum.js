import React, { useState } from 'react';
import { Box, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CreatePost from './CreatePost';
import postStyles from './PostStyles';
import Post from './Post';

const incident = [
  {
    title: "Theft at Restaurant",
    user: "Monica Geller",
    location: "Vancouver",
    description: "Someone stole something"
  },
  {
    title: "Assault by Comic Book Store",
    user: "Ross Geller",
    location: "New York",
    description: "Pheobe mugged me!"
  },
  {
    title: "Purse Stolen",
    user: "Rachel Green",
    location: "New York",
    description: "Tall man in black hoodie stole my bag!"
  }
]

const Forum = () => {
  const classes = postStyles();
  const [ allPosts, setAllPosts ] = useState(incident); // list of all the posts
  const [ selected, setSelected ] = useState(false); // add button --> true

  const [ title, setTitle ] = useState("");
  const [ user, setUser ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ description, setDescription ] = useState("");
  
  const addPost = () => {
    const postData = {
      title,
      user,
      location,
      description
    };
  
    setAllPosts((prev) => {
      return [...prev, postData]
    })
    
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box>
          <h1>Forum</h1>
          </Box>
          <Box margin="30px">
            <Fab onClick={() => setSelected(true) } color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Box>

        <Box display="flex">
          <Box margin="50px">
          { allPosts.map(post => {
            return (
              <Box className={classes.postBox}>
              <div key={post.title+post.user+post.location} >
                <Post 
                  title={post.title}
                  user={post.user}
                  location={post.location}
                  description={post.description} />
              </div>
              </Box>
            )})}
          </Box>
          
          <Box margin="50px">
            { selected ? <CreatePost setTitle={setTitle} setUser={setUser} setLocation={setLocation} setDescription={setDescription}  addPost={addPost} /> : null}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Forum;