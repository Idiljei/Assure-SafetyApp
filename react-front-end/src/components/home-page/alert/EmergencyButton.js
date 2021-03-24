import React from 'react';
import { Button, Box, Dialog } from '@material-ui/core';
import { smsPolice, callPolice } from '../sms';
import EnterPin from './EnterPin';
import SafeNow from './SafeNow';
import WrongPin from './WrongPin';
import CallIcon from '@material-ui/icons/Call';
import useStyles from '../../Styles';
import './Alertpopup.css';

const EmergencyButton = (props) => {
  const classes = useStyles();
  const option = props.policeStatus;
  const setOption = props.setPoliceStatus;
  const id = 'police';

  const status = {
    before: "Call Emergency Services",
    after: "Calling Emergency Services!"
  }

  const handleClick = () => {
    if (!option) {
      setOption(1)
      // smsPolice()
      // callPolice();
    }

    if (option === 1) {
      setOption(2)
    }
  };

  return (
    <Box className={classes.home}>
      <Button onClick={handleClick} type="submit" className={!option ? classes.homeButton : classes.homeButtonClicked} size="large" variant="contained">
          <div class="button-message-em">
            <div>
            <CallIcon style={{ fontSize: 30 }}/>
            </div>
            <h4 class="message-em">
            { !option && status.before }
            { option >= 1 && status.after}
            </h4>
          </div>
      </Button>

      { option > 1 ?  
      
      <Dialog open={option > 1} aria-labelledby="form-dialog-title">
        
        { option === 2 ? <EnterPin  setOption={setOption} option={option} id={id} /> : null}

        { option === 3 ? <SafeNow setOption={setOption} option={option} id={id} /> : null }

        { option === 4 ? <WrongPin setOption={setOption} id={id} /> : null}

      </Dialog> 

      : null }
    </Box>
  )
};

export default EmergencyButton;