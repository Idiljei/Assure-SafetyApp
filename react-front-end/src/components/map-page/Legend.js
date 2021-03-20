import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Snackbar } from '@material-ui/core';
import '../map-page/search.css';

const useStyles = makeStyles({
  box: {
    border: "black solid 2px"
  }
})


const MapLegend = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const message = (
    <>
    <div class="icon-box">
      <img src="./hospital.svg" class="legend-icon"/>
      <h4>Hospitals</h4>
      <img src="./police.svg" class="legend-icon"/>
      <h4>Police Staions</h4>
    </div>
    <div class="icon-box">
      <img src="./fire-station.svg" class="legend-icon"/>
      <h4>Fire Stations</h4>
    </div>
    <div class="icon-box">
      <img src="./burglar.svg" class="legend-icon"/>
      <h4>Theft</h4>
      <img src="./harassment.svg" class="legend-icon"/>
      <h4>Harassment</h4>
      <img src="./report.svg" class="legend-icon"/>
      <h4>Other</h4>
    </div>  
    </>
  )

  return (
    <div class="legend">
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default MapLegend;
