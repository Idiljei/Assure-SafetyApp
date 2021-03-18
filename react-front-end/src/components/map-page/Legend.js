import React from "react";
import { Box } from "@material-ui/core";
import "./search.css";

const Legend = () => {
  return (
    <Box display="flex">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginRight="1em"
      >
        <img src="./report.svg" alt="report icon" class="report-icon" />
        <h4 class="legend">Reported Crimes</h4>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <img src="./hospital.svg" alt="hospital icon" class="report-icon" />
        <h4 class="legend">Hospitals</h4>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <img src="./police.svg" alt="police icon" class="report-icon" />
        <h4 class="legend">Police Stations</h4>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <img src="./fire-station.svg" alt="fire icon" class="report-icon" />
        <h4 class="legend">Fire Station</h4>
      </Box>
    </Box>
  );
};

export default Legend;
