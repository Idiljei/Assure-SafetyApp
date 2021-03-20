import React, { useState, useEffect } from 'react';
import { Button, Box, Dialog } from '@material-ui/core';
import EnterPin from './EnterPin';
import SafeNow from './SafeNow';
import WrongPin from './WrongPin';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../Styles';

const LocationButton = (props) => {
  const classes = useStyles();
  const userStatus = props.userStatus;
  const setUserStatus = props.setUserStatus;
  const id = props.id;
  const [ checkPin, setCheckPin ] = useState(0);

  const status = {
    false: "Share Live Location",
    true: "Currently sharing your Live Location"
  }

  const turnOnLocationSharing = async () => {
    const id = 9;
    await fetch(`http://localhost:8080/home/${id}`, {
    method: 'PUT'
    })
    .catch(err => console.log(err))
  }

  const handleClick = () => {
    if (!userStatus) {
      setUserStatus(true);
      turnOnLocationSharing();
      // smsLocation();
    }

    if (userStatus) {
      setCheckPin(1)
    }
  }
  

  return (
    <Box className={classes.home}>
      <Button onClick={handleClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        
      { userStatus ? status.true : status.false }
      </Button>


      { checkPin ?  
      
      <Dialog open={checkPin} aria-labelledby="form-dialog-title">
        
        { checkPin === 1 ? <EnterPin setCheckPin={setCheckPin} setUserStatus={setUserStatus} /> : null}
        { checkPin === 2 ? <SafeNow setUserStatus={setUserStatus} setCheckPin={setCheckPin} id={id} /> : null }
        { checkPin === 3 ? <WrongPin setCheckPin={setCheckPin} id={id} /> : null}

      </Dialog> 

      : null }

    </Box>
  )
};

export default LocationButton;