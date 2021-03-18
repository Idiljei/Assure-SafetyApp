import React, { useState } from 'react';
import CancelButton from './CancelButton';
import Alert from '@material-ui/lab/Alert';
import { Box, TextField, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const userPIN = 2021;
const limit = 4;
const alerts = {
  sharing: "Calling Emergency Services.",
  verify: "Please enter your PIN to cancel.",
  cancelled: "Cancelling call to Emergency Services. Glad you're safe!",
  incorrect: "The PIN is incorrect. Still calling Emergency Services.",
}

const PoliceAlert = (props) => {
  const [ pin, setPin ] = useState(0);
  const setSelected = props.setSelected;
  const selected = props.selected;

  const handleSubmit = () => {
    if (userPIN === parseInt(pin)) {
      setSelected(2);
    } else {
      setSelected(3);
    }
  };

  const onClose = () => {
    props.close(false)
  }

  return (
  <div>
    { !selected &&  
        <Alert variant="outlined" severity="warning">
          {alerts.sharing}
          <CancelButton setSelected={setSelected} /> 
        </Alert> }

    { selected === 1 && 
        <Alert variant="outlined" severity="info">
        {alerts.verify}
          <Box>
            <TextField
              type="password"
              onChange={e => setPin(e.target.value)} 
              inputProps={{
                maxLength: limit
              }}/>
              <Button variant="outlined" color="primary" onClick={handleSubmit}>
                Enter
              </Button>
          </Box>
        </Alert> }

    { selected === 2 &&
        <Alert 
          variant="outlined" 
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          }  
        >
          {alerts.cancelled}
        </Alert> }
    
    { selected === 3 &&
      <Alert 
        variant="outlined"
        severity="error"  
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
          <CloseIcon />
        </IconButton>
      }  
      >
        {alerts.incorrect}
        <Button onClick={e => setSelected(1)}>Try Again</Button>
      </Alert> }
  </div>

  );
};

export default PoliceAlert;
