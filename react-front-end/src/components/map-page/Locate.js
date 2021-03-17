import React from "react";
import { IconButton, Tooltip } from '@material-ui/core';
import MyLocationIcon from '@material-ui/icons/MyLocation';

function Locate({panTo}) {

  return (
  <Tooltip title="Find Me" aria-label="Get Current Location">
    <IconButton
      variant="contained"
      onClick={() => {
      navigator.geolocation.getCurrentPosition((position) => panTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }), () => null)
    }}><MyLocationIcon fontSize="large"/>
    </IconButton>
  </Tooltip>)
};

export default Locate;