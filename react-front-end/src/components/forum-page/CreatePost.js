import React from 'react';
import { Button, TextField, Grid, Paper, IconButton, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import postStyles from './PostStyles';

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
                <Box display="flex" flexDirection="row">
                <h2>Report a Crime</h2>
                <IconButton aria-label="close" onClick={props.close} margin="3em">
                  <CloseIcon />
                </IconButton>
                </Box>
              </Grid>

            <Grid item>
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
                label="Address"
                color="primary"
                variant="outlined"
                onChange={(e) => props.setAddress(e.target.value)} 
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
                  <Grid item>
                  <TextField
                    id="datetime-local"
                    label="Date"
                    type="datetime-local"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => props.setDate(e.target.value)} 
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
                onClick={props.onSubmitForm} 
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