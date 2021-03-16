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



// In the forum: 

// Search bar => on Submit => find lat&lng of the address => save this address to the database => display the address in the database as a marker

// function => displays the address from the posts from the database as a marker on the map 

// function => displays the title of the posts in the info window for that address