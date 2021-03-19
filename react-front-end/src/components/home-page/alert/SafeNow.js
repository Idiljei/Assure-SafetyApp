import React, { useState } from 'react';
import { Paper, Dialog, DialogActions, DialogContent, DialogContentText, Button, DialogTitle } from '@material-ui/core';

const SafeNow = (props) => {
  const option = props.option;
  const setOption = props.setOption;
  const id = props.id;

  const handleClose = () => {
    setOption(0)
  }

  return (
    <div>
      <DialogTitle id="form-dialog-title">Glad you're safe!</DialogTitle>
      <DialogContent>

      { id === 'location' && 
        <DialogContentText id="alert-dialog-description">
          No longer sharing your live location
        </DialogContentText> }

      { id === 'police' && 
        <DialogContentText id="alert-dialog-description">
          No longer calling emergency services
        </DialogContentText> 
      }

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </div>
  )
};

export default SafeNow;