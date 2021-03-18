import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const CancelButton = (props) => {

  const onClick = () => {
    props.setSelected(1)
  }

  return (
    <Button variant="outlined" color="primary" onClick={onClick} size="small"> 
      Cancel
    </Button>
  )
};

export default CancelButton;