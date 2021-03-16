import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import useStyles from '../Styles';

const Home = (props) => {
  const classes = useStyles();

  const sendSMS = async(e) => {
    e.preventDefault();

    const body = { "message": "Phoebe has sent her live location through Assure" }
    await fetch('/sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then(res =>  res.json())
    .catch(err => console.log(err))
  }

  return (
    <Box className={classes.homeBox}>
      <Button onClick={sendSMS} className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        Share Live Location
      </Button>
    
      <Button className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>
    </Box>
  );
};

export default Home;

