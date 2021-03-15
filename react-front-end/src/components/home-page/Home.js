import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import useStyles from '../Styles';
import './Home.css';

const Home = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.homeBox}>
      <Button className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        Share Live Location
      </Button>
      
      <Button className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>
    </Box>
  );
};

export default Home;

