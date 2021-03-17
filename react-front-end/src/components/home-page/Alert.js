import React, { useState } from 'react';
import CancelButton from './CancelButton';
import Alert from '@material-ui/lab/Alert'

const alerts = {
  sharing: "Sharing live location with safety network!",
  verify: "Please enter your PIN to cancel."
}

const AlertNotice = () => {
  const [ selected, setSelected ] = useState(false);
  console.log("Alert:", selected)

  return (

  <div>

  { selected ? 
      <Alert variant="outlined" severity="info">
      {alerts.verify}
      </Alert>  
    
    :  <Alert variant="outlined" severity="info">
        {alerts.sharing}
        <CancelButton setSelected={setSelected} /> 
      </Alert>  }

  </div>

  );
};

export default AlertNotice;