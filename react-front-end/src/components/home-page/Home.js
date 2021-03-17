import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import useStyles from '../Styles';
import { smsLocation } from './sms'
import { smsPolice } from './sms'

const Home = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.homeBox}>
      <Button onClick={smsLocation} className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        Share Live Location
      </Button>
    
      <Button onClick={smsPolice} className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>
    </Box>
  );
};

export default Home;

