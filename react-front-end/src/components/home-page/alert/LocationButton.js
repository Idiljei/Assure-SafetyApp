import React from 'react';
import { Button, Box } from '@material-ui/core';
import ConfirmCancel from '../alert/ConfirmCancel';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../Styles';

const LocationButton = (props) => {
  const classes = useStyles();
  const option = props.location;
  const setOption = props.setLocation;

  const status = {
    before: "Share Live Location",
    after: "Currently sharing your Live Location"
  }

  const turnOnLocationSharing = async () => {
    const id = 2;
    await fetch(`http://localhost:8080/home/${id}`, {
    method: 'PUT',
    })
    .catch(err => console.log(err))
  }

  const handleClick = () => {
    if (!option) {
      setOption(1)
      turnOnLocationSharing();
      // smsLocation();
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

      { option > 1 ? <ConfirmCancel id="location" option={option} setOption={setOption} /> : null }

    </Box>
  )
};

export default LocationButton;