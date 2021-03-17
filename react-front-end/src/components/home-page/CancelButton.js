import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const CancelButton = (props) => {
  
  const onClick = () => {
    props.setSelected(true)
  }

  return (
    <Button variant="outlined" color="secondary" onClick={onClick}> 
      Cancel
    </Button>
  )
};

export default CancelButton;