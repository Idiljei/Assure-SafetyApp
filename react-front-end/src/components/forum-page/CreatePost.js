import React, { useState } from 'react';
import { Button, TextField, Paper, IconButton, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Search from '../map-page/Search';
import Locate from '../map-page/Locate';
import postStyles from './PostStyles';
import './forum.css';

const CreatePost = (props) => {
  const classes = postStyles();
  
  return (
    <section>
      <Paper variant="elevation" elevation={3} className={classes.background}>
        <Box display="flex" flexDirection="column" width="50em">
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box>
              <h1 class="title">Report a Crime</h1>
              <h4 class="subtitle">Help the community stay safe</h4>
            </Box>
            <Box alignSelf="stretch">
              <IconButton aria-label="close" onClick={props.close} margin="3em"  >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" width="50em">
            <Box width="80%">
            <Box>
              <TextField
                className={classes.input}
                id="standard-basic" 
                label="Title" 
                color="primary" 
                onChange={(e) => props.setTitle(e.target.value)} 
              />
            </Box>
            <Box display="flex" width="100%" justifyContent="space-between">

              <Box display="flex">
                <Search 
                  onSubmit={(e) => props.setAddress(e.target.value)} 
                />
                <Locate />
              </Box>

              <Box>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  label="Date"
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => props.setDate(e.target.value)} 
                />
              </Box>
            </Box>

              <Box>
                <TextField
                  className={classes.input}
                  id="outlined-multiline-static"
                  label="Incident Description"
                  color="primary"
                  multiline
                  rows={7}
                  variant="outlined"
                  onChange={(e) => props.setDescription(e.target.value)} 
                />
              </Box>

              <Box display="flex" justifyContent="center">
                <Box>
                  <Button
                    className={classes.submitButton}
                    type="submit"
                    size="large" 
                    variant="contained"
                    onClick={props.onSubmitForm} 
                    > Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </section>
  );
};

export default CreatePost;

{/* <Box width="100%">
<TextField
  className={classes.searchInput} 
  id="standard-basic" 
  label="Address"
  color="primary"
  onChange={(e) => props.setAddress(e.target.value)} 
  />
</Box> */}
