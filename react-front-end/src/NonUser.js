import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import App from './App';
import './Nonuser.css';

const NonUser = () => {
  const [ login, setLogin ] = useState(false);

  return (
  <div className="main-box">
    <div className="main-logo">
        <img src="logo/assure-logo.png" alt="assure logo"/>
    </div>

    <div>
      <Button onClick={setLogin(true)} >Login</Button>
    </div>

    { login ? <App /> : null}

  </div>
  )
}

export default NonUser;