import React from "react";
import useStyles from '../Styles';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


function Locate({panTo}) {
  const classes = useStyles();

  return <Button
    className={classes.locateButton}
    variant="contained"
    startIcon={<SearchIcon />}
    onClick={() => {
    navigator.geolocation.getCurrentPosition((position) => panTo({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }), () => null)
  }}>Find Me!
  </Button>

  

};

export default Locate;