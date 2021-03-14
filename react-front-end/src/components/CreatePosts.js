import React, { useState } from 'react';
import { Button, TextField, Grid, Paper } from '@material-ui/core';
import ShowPost from './ShowPost';
import postStyles from './PostStyles';

const CreatePost = () => {
  const classes = postStyles();
  const [ title, setTitle ] = useState("");
  const [ name, setName ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ incidents, setIncidents ] = useState([]);
  
  const post = {
    title,
    name,
    location,
    description
  };

  const addPost = () => {
    setIncidents((prev) => {
      console.log(" This is the add post function:", [...prev, post])
      return [...prev, post]
    })
  };
  
  return (
    <section>
      <Grid container justify="center" direction="row">
        <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={2}
          className={classes.createPost}
          >
        <Paper
          variant="elevation"
          elevation={3}
          className={classes.background}
          >
          <Grid item>
          <form noValidate autoComplete="off">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <h2>Report a Crime</h2>
              </Grid>
            <Grid item>
            <TextField 
              id="standard-secondary" 
              label="Title" 
              value={post.title} 
              color="primary" 
              variant="outlined" 
              onChange={(event) => setTitle(event.target.value)} 
              />
              </Grid>
              <Grid item>
              <TextField 
                id="standard-secondary" 
                label="Name" 
                value={post.name} 
                color="primary" 
                variant="outlined" 
                onChange={(event) => setName(event.target.value)} 
                />
                </Grid>
                <Grid item>
                <TextField 
                  id="standard-secondary" 
                  label="Location"
                  value={post.location} 
                  color="primary"
                  variant="outlined"
                  onChange={(event) => setLocation(event.target.value)} 
                  />
                  </Grid>
                  <Grid item>
                  <TextField 
                    id="standard-secondary"
                    label="Description"
                    value={post.description} 
                    color="primary" 
                    variant="outlined"
                    onChange={(event) => setDescription(event.target.value)} 
                    />
                    </Grid>
                    </Grid>
                  </form>
                </Grid>
              <Grid item>
              <Button
                className={classes.submitButton}
                type="submit"
                size="large" 
                variant="contained"
                onClick={addPost} 
                > Submit
              </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <h2>Reported Incidents:</h2>
      { incidents.map(incident=> {
        return <div><ShowPost title={incident.title} name={incident.name} location={incident.location} description={incident.description}/></div>
      })}
    
    </section>
  );
};

export default CreatePost;