import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterButton() {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          label="Filter"
        >
        <MenuItem value={1}>Distance</MenuItem>
        <MenuItem value={2}>Recent</MenuItem>
      </Select>
    </FormControl>
  )
}