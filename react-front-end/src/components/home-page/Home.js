import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import Alert from '@material-ui/lab/Alert';
import useStyles from '../Styles';
import { smsLocation } from './sms'
import { smsPolice } from './sms'

const Home = (props) => {
  const classes = useStyles();
  const [ selectLocation, setSelectedLocation ] = useState(false);
  const [ selectPolicecall, setSelectPolicecall ] = useState(false);


  const handleLocationClick = () => {
    setSelectedLocation(true)
    smsLocation()
  }

  const handlePoliceClick = () => {
    setSelectPolicecall(true)
    smsLocation()
  }

  return (
    <Box className={classes.homeBox}>
    {selectLocation ? 
    <div>
        <Button onClick={handleLocationClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
          Share Live Location
        
        </Button>
      <Alert variant="outlined" severity="info">
        sharing live location with safety network! 
      </Alert>  
    </div> : <Button onClick={handleLocationClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        Share Live Location
      </Button> } 

{selectPolicecall ? 
  <div>
      <Button />
      <Alert variant="outlined" severity="success">
        Calling Emergency Services 
      </Alert>
      <Button onClick={handlePoliceClick} className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>
  </div> : <Button onClick={handlePoliceClick} className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button> }
  </Box>

  );

};

export default Home;

