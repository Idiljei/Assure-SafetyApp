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
    <div class="big-box">
      <div class="icon-box">
        <div class="small-box">
        <img src="./hospital.svg" class="legend-icon"/>
        <h4 class="icon-label">Hospitals</h4>
        </div>

        <div class="small-box">
        <img src="./police.svg" class="legend-icon"/>
        <h4 class="icon-label">Police Stations</h4>
        </div>

        <div class="small-box">
        <img src="./fire-station.svg" class="legend-icon"/>
        <h4 class="icon-label">Fire Stations</h4>
        </div>
      </div>

      <div class="icon-box">
        <div class="small-box">
        <img src="./burglar.svg" class="legend-icon"/>
        <h4 class="icon-label">Theft</h4>
        </div>
  
        <div class="small-box">
        <img src="./harassment.svg" class="legend-icon"/>
        <h4 class="icon-label">Harassment</h4>
        </div>

        <div class="small-box">
        <img src="./report.svg" class="legend-icon"/>
        <h4 class="icon-label">Other</h4>
        </div>
      </div>
      </div>
    </>
  )

  return (
    <div class="legend">
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Legend</Button>
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
