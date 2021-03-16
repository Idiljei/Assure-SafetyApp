import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import App from './App';
import './Login.css';

const Login = () => {
  const [ login, setLogin ] = useState(false);

  return (
    <div> 
        { login ? <App /> : 
          <div className="main-box">
            <div className="main-logo">
                <img src="logo/assure-logo.png" alt="assure logo"/>
            </div>

            <div>
              <Button 
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