import React, { useState } from 'react';
import { DialogActions, DialogContent, TextField, Button, DialogTitle } from '@material-ui/core';

const userPIN = 2021;
const limit = 4;

const EnterPin = (props) => {
  const option = props.option;
  const setOption = props.setOption;

  const [ pin, setPin ] = useState(0);

  const handleClose = () => {
    setOption(1)
  }

  const handleSubmit = () => {
    if (userPIN === parseInt(pin)) {
      setOption(3);
    } else {
      setOption(4);
    }
  }

  console.log("This is the option: ", option)
  console.log(pin)

  return (
    <div>
      <DialogTitle id="form-dialog-title">Enter Pin if Safe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          inputProps={{
            maxLength: limit
          }}
          type="password"
          onChange={e => setPin(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Enter
        </Button>
      </DialogActions>
    </div>

  )
};

export default EnterPin;