import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  root: {
    background: 'linear-gradient(45deg, #6190E8, #A7BFE8)',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px'
  }    
});

const Home = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.root} size="large" startIcon={<SendIcon />} variant="contained">
        Text Live Location
      </Button>
      <Button className={classes.root} size="large" startIcon={<ErrorIcon />} variant="contained">
        Call 911
      </Button>
    </div>
  );
};

export default Home;

