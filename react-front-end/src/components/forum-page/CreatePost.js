import React from 'react';
import { Button, TextField, Grid, Paper } from '@material-ui/core';
import postStyles from './PostStyles';
import SearchApi from './../map-page/Search';

const CreatePost = (props) => {
  const classes = postStyles();
  
  return (
    <section>

      <Grid container justify="center" direction="row">
        <Grid Item>
        </Grid>
        <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          className={classes.createPost}
          >
        <Paper
          variant="elevation"
          elevation={3}
          className={classes.background}
          >
          <Grid item>
          <form noValidate autoComplete="off">
            <Grid container direction="column">
              <Grid item>
                <h2>Report a Crime</h2>
              </Grid>
            <Grid item>
            <SearchApi />
            <TextField 
              id="standard-secondary" 
              label="Title" 
              color="primary" 
              variant="outlined"
              onChange={(e) => props.setTitle(e.target.value)} 
              />
              </Grid>
              <Grid item>
              <TextField 
                id="standard-secondary" 
                label="Name" 
                color="primary" 
                variant="outlined" 
                onChange={(e) => props.setUser(e.target.value)} 
                />
                </Grid>
                <Grid item>
                <TextField 
                  id="standard-secondary" 
                  label="Location"
                  color="primary"
                  variant="outlined"
                  onChange={(e) => props.setLocation(e.target.value)} 
                  />
                  </Grid>
                  <Grid item>
                  <TextField 
                    id="standard-secondary"
                    label="Description"
                    color="primary" 
                    variant="outlined"
                    onChange={(e) => props.setDescription(e.target.value)} 
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
                onClick={props.addPost} 
                > Submit
              </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default CreatePost;