import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import LocationAlert from './alert/LocateAlert';
import PoliceAlert from './alert/PoliceAlert';
import useStyles from '../Styles';
import { smsLocation } from './sms'
import { smsPolice } from './sms'
import '././alert/Alertpopup.css';

const Home = (props) => {
  const classes = useStyles();
  const [ selectedLOC, setSelectedLOC ] = useState(0);
  const [ selectedPOL, setSelectedPOL ] = useState(0);

  const [ location, setLocation ] = useState(false);
  const [ police, setPolice ] = useState(false);

  const handleLocationClick = () => {
    setLocation(true);
    setSelectedLOC(0);
    // smsLocation()
  }

  const handlePoliceClick = () => {
    setPolice(true)
    setSelectedPOL(0);
    // smsPolice()
  }

  return (
    <Box className={classes.homeBox}>

      <Button onClick={handleLocationClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
              Share Live Location
      </Button>

      { location &&  <LocationAlert close={setLocation} location={location} selected={selectedLOC} setSelected={setSelectedLOC} /> }

      <Button onClick={handlePoliceClick} className={classes.homeButton} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>

      { police &&  <PoliceAlert close={setPolice} police={police} selected={selectedPOL} setSelected={setSelectedPOL} /> }
            
    </Box>
  );
};

export default Home;