import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from "@material-ui/core/styles";
import './Home.css';

const useStyles = makeStyles({ 
  box: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  root: {
    background: 'linear-gradient(45deg, #6190E8, #A7BFE8)',
    border: 0,
    color: 'white',
    height: 60,
    padding: '40px',
    margin: '100px'
  }    
});

const Home = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Button className={classes.root} size="large" startIcon={<SendIcon />} variant="contained">
        Share Live Location
      </Button>
      <Button className={classes.root} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>
    </Box>
  );
};

export default Home;

