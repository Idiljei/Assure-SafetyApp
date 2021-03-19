import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import LocationButton from './alert/LocationButton';
import EmergencyButton from './alert/EmergencyButton';
import useStyles from '../Styles';
import '././alert/Alertpopup.css';

const Home = (props) => {
  const classes = useStyles();

  const [ location, setLocation ] = useState(0);
  const [ police, setPolice ] = useState(0);

  return (
    <Box className={classes.homeBox}>
      <Box display="flex" flexDirection="column" margin="2em">
        <LocationButton location={location} setLocation={setLocation} />
      </Box>

      <Box>
        <EmergencyButton police={police} setPolice={setPolice} />
      </Box>
    </Box>
  )
};

export default Home;