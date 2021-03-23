import React from 'react';
import { Button, Box, Dialog } from '@material-ui/core';
import EnterPin from './EnterPin';
import SafeNow from './SafeNow';
import { smsPolice } from './EmergencyButton';
import WrongPin from './WrongPin';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../Styles';
import Siren from './Siren'


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
    }

    if (option === 1) {
      setOption(2)
    }
  }

  return (
    <Box className={classes.home}>
      <Siren></Siren>
      <Button onClick={handleClick} type="submit" className={classes.homeButton} size="large" startIcon={<SendIcon />} variant="contained">
        
        { !option && status.before }
        { option >= 1 && status.after}
        
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