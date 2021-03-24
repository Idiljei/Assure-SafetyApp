import React, { useState } from 'react';
import { Button, Box, Dialog } from '@material-ui/core';
import EnterPin from './EnterPin';
import SafeNow from './SafeNow';
import { smsLocation } from '../sms';
import WrongPin from './WrongPin';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../Styles';
import './Alertpopup.css';

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
    const id = 3;
    await fetch(`http://localhost:8080/home/${id}`, {
    method: 'PUT'
    })
    .catch(err => console.log(err))
  }

  const handleClick = () => {
    if (!userStatus) {
      setUserStatus(true);
      turnOnLocationSharing();
      smsLocation();
    }

    if (userStatus) {
      setCheckPin(1)
    }
  }
  
  return (
    <Box className={classes.home}>
      <Button onClick={handleClick} type="submit" className={!userStatus ? classes.homeButton : classes.homeButtonClicked} size="large" variant="contained">
      <div class="button-message">
        <div class="icon">
          <SendIcon style={{ fontSize: 30 }}/>
        </div>
        <h4 class="message">
          { userStatus ? status.true : status.false }
        </h4>
      </div>
        
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