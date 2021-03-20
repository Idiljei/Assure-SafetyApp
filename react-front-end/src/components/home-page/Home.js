import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import LocationButton from './alert/LocationButton';
import EmergencyButton from './alert/EmergencyButton';
import useStyles from '../Styles';
import '././alert/Alertpopup.css';

const Home = () => {
  const classes = useStyles();
  const [ userStatus, setUserStatus ] = useState(null);

  const checkLocationStatus = async() => {
    try {
    const id = 9;
    const response = await fetch(`http://localhost:8080/user/${id}`)
    const jsonData = await response.json();

    jsonData.map(data => {
      const confirmStatus = data.sharing_location
      return setUserStatus(confirmStatus)
    })}
    catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    checkLocationStatus();
  }, []);

  console.log("This is the user Status:", userStatus)

  return (
    <Box className={classes.homeBox}>
      <Box margin="2em">
        <LocationButton
          id="location"
          userStatus={userStatus}
          setUserStatus={setUserStatus} 
          checkLocationStatus={checkLocationStatus} />
      </Box>

      <Box margin="2em">
        <EmergencyButton />
      </Box>
    </Box>
  )
};

export default Home;