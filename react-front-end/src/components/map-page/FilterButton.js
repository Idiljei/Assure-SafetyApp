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

export default function FilterButton(props) {
  const classes = useStyles();
  const filter = props.filter;

  const handleChange = (e) => {
    props.setFilter(e.target.value);
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
        
        <MenuItem value={0}>Show All</MenuItem>

        <MenuItem value={3}>
          <Box display="flex" alignItems="center">
            <img src="./users.svg" alt="user icon" class="report-icon" />
            <h4>Safety Network</h4>
          </Box>
        </MenuItem>

        <MenuItem value={2} >
          <Box display="flex" alignItems="center">
            <img src="./report.svg" alt="report icon" class="report-icon" />
            <h4>Reported Incidents</h4>
          </Box>
        </MenuItem>

        <MenuItem value={1}>
          <Box display="flex" alignItems="center">
            <img src="./hospital.svg" alt="hospital icon" class="report-icon" />
            <h4>Safe Spots</h4>
          </Box>
        </MenuItem>
    
      </Select>
    </FormControl>
  )
}