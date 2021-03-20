import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import "../map-page/search.css";

const useStyles = makeStyles((theme) => ({
  box: {
    width: '15em',
    margin: 0
  }
}));

export default function FilterButton() {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.box}>
      <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          label="Filter"
        > 
        
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1} >
          <Box display="flex" alignItems="center">
            <img src="./report.svg" alt="report icon" class="report-icon" />
            <h4>Reported Incidents</h4>
          </Box>
        </MenuItem>

        <MenuItem value={2}>
          <Box display="flex" alignItems="center">
            <img src="./hospital.svg" alt="hospital icon" class="report-icon" />
            <h4>Hospitals</h4>
          </Box>
        </MenuItem>

        <MenuItem value={3}>
          <Box display="flex" alignItems="center">
            <img src="./police.svg" alt="police icon" class="report-icon" />
            <h4>Police Stations</h4>
          </Box>
        </MenuItem>

        <MenuItem value={4}>
          <Box display="flex" alignItems="center">
            <img src="./fire-station.svg" alt="fire icon" class="report-icon" />
            <h4>Fire Stations</h4>
          </Box>
        </MenuItem>
    
      </Select>
    </FormControl>
  )
}