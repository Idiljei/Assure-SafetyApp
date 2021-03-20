import React from 'react';
import { DialogActions, DialogContent, DialogContentText, Button, DialogTitle } from '@material-ui/core';

const WrongPin = (props) => {
  const id = props.id;

  const handleClose = () => {
    props.setCheckPin(0)
    // setUserStatus(true)
  }

  const handleSubmit = () => {
    props.setCheckPin(1);
  }

  return (
    <div>
      <DialogTitle id="form-dialog-title">Incorrect PIN</DialogTitle>
      <DialogContent>
      
      { id === 'location' && 
        <DialogContentText id="alert-dialog-description">
          Live Location is still being shared!
        </DialogContentText> }

      { id === 'police' &&
        <DialogContentText id="alert-dialog-description">
          Emergency Services is being contacted!
        </DialogContentText> }

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Try Again
        </Button>
      </DialogActions>
    </div>
  )
};

export default WrongPin;