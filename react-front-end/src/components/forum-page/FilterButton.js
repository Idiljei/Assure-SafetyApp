import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  filter: {
    width: '8em'
  }
}));

export default function FilterButton() {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.filter}>
      <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value={1} >Distance</MenuItem>
          <MenuItem value={2}>Recent</MenuItem>
      
      </Select>
    </FormControl>
  )
}