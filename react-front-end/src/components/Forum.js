import React, { useState } from 'react';
import CreatePost from './CreatePosts';
import ShowPost from './ShowPost';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import postStyles from './PostStyles';

const savedPosts = {
  title: "Theft at Restaurant",
  name: "Monica Geller",
  location: "Vancouver",
  description: "Someone stole something"
}

const Forum = () => {
  const [ selected, setSelected ] = useState(false);
  const classes = postStyles();

  return (  
  <div>
    <Grid container justify="center" direction="row">
    <Grid item>
    <Grid
          container
          direction="column"
          justify="center"
          spacing={2}
          className={classes.forum}
          >
      <Grid item>
        <ShowPost title={savedPosts.title} name={savedPosts.name} location={savedPosts.location} description={savedPosts.description}/>
      </Grid>
      <Grid item>
        <Fab onClick={() => setSelected(true)} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Grid>
      </Grid>
      </Grid>
    </Grid>

    { selected ? <CreatePost /> : null }

  </div>
  );
};

export default Forum;