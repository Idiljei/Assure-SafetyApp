import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./search.css";

const useStyles = makeStyles({
  legend: {
    display: "flex",
    alignSelf: "center",
    border: "solid black 2px",
    width: "fit-content",
    margin: "1.5em",
    padding: "0.5em",
    height: "112px",
    marginBottom: 0
  }
})

const Legend = () => {
  const classes = useStyles();

  return (
    <Box className={classes.legend}>

      <Box display="flex" flexDirection="column" >
        <Box display="flex" alignItems="center">
          <img src="./report.svg" alt="report icon" class="report-icon" />
          <h4 class="legend">Reported Incidents</h4>
        </Box>

        <Box display="flex" alignItems="center">
          <img src="./hospital.svg" alt="hospital icon" class="report-icon" />
          <h4 class="legend">Hospitals</h4>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center">
        <img src="./police.svg" alt="police icon" class="report-icon" />
        <h4 class="legend">Police Stations</h4>
      </Box>

      <Box display="flex" alignItems="center">
        <img src="./fire-station.svg" alt="fire icon" class="report-icon" />
        <h4 class="legend">Fire Stations</h4>
      </Box>
      </Box>
    </Box>
  );
};

export default Legend;
