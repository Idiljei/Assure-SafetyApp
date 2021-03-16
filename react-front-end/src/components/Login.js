import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import App from '';
import './Login.css';

const Login = () => {
  const [ login, setLogin ] = useState(false);

  return (
  <div className="main-box">
    <div className="main-logo">
        <img src="logo/assure-logo.png" alt="assure logo"/>
    </div>

    <div>
      <Button onClick={(e) => setLogin(true)} >Login</Button>
    </div>

    { login ? <App /> : null}

  </div>
  )
}

export default Login;