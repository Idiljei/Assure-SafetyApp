import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import App from './App';
import './Login.css';

const loginStyles = makeStyles({
  button: {
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})

const Login = () => {
  const classes = loginStyles();
  const [ login, setLogin ] = useState(true);

  return (
    <div> 
        { login ? <App /> : 
          <div className="main-box">
            <div className="main-logo-box">
                <img class="main-logo" src="logo/assure-logo.png" alt="assure logo"/>
            </div>

            <div>
              <Button
                className={classes.button}
                onClick={(e) => setLogin(true)} 
                variant="outlined"
                size="large"
                >Login</Button>
            </div>
          </div>
          }
      </div>
  )
}

export default Login;