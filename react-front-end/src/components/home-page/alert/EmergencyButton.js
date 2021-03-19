import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import ConfirmCancel from '../alert/ConfirmCancel';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../Styles';

const EmergencyButton = (props) => {
  const classes = useStyles();

  const option = props.police;
  const setOption = props.setPolice;

  const status = {
    before: "Call Emergency Services",
    after: "Calling Emergency Services!"
  }

  const handleClick = () => {
    if (!option) {
      setOption(1)
      // smsPolice()
    }

    if (option === 1) {
      setOption(2)
    }
  }

  return (
    <Box className={classes.home}>
      <Button onClick={handleClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        
        { !option ? status.before : status.after }
      
      </Button>

      { option > 1 ? <ConfirmCancel id="police" option={option} setOption={setOption} /> : null }

    </Box>
  )
};

export default EmergencyButton;