import React from "react";
import useStyles from '../Styles';
import { IconButton, Tooltip } from '@material-ui/core';
import MyLocationIcon from '@material-ui/icons/MyLocation';


function Locate({panTo}) {
  const classes = useStyles();

  return (
  <Tooltip title="Get Current Location" aria-label="Get Current Location">
  <IconButton
    variant="contained"
    onClick={() => {
    navigator.geolocation.getCurrentPosition((position) => panTo({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }), () => null)
  }}><MyLocationIcon />
  </IconButton>
  </Tooltip>)
};

export default Locate;