import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import AlertNotice from './alert/Alert';
import useStyles from '../Styles';
import { smsLocation } from './sms'
import { smsPolice } from './sms'
import '././alert/Alertpopup.css';


const Home = (props) => {
  const classes = useStyles();
  const [ selected, setSelected ] = useState(0);
  const [ locationButton, setLocationButton ] = useState(false);
  const [ policeButton, setPoliceButton ] = useState(false);
  const [ selectLocation, setSelectedLocation ] = useState(false);
  const [ selectPolicecall, setSelectPolicecall ] = useState(false);


  const handleLocationClick = () => {
    setSelectedLocation(true)
    setSelected(0);
    setLocationButton(true);
    // smsLocation()
  }

  const handlePoliceClick = () => {
    setSelectPolicecall(true)
    setSelected(0);
    setPoliceButton(true);
    // smsPolice()
  }

  return (
    <Box className={classes.homeBox}>

      <Button onClick={handleLocationClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
              Share Live Location
      </Button>

      { selectLocation &&  <AlertNotice  close={setSelectedLocation} selected={selected} setSelected={setSelected} locButton={locationButton} /> }

      <Button onClick={handlePoliceClick} className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>

      { selectPolicecall &&  <AlertNotice close={setSelectPolicecall} selected={selected} setSelected={setSelected} poButton={policeButton} /> }
            
    </Box>
  );
};

export default Home;

