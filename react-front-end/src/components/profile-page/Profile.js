import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from './profile-tabs/ProfileTab';
import './profileStyles.css'

const profileStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1.5em",
    marginTop: "0.5em",
    width: "50%"
  }
});

const Profile = () => {
  const classes = profileStyles();
  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/${id}`);
      const jsonData = await response.json();

      setUser(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

return (
  <div class="profile">
  { users.map(user => {
    return (
        <Paper elevation={3} className={classes.root}>
          <div class="profile-box">
            <img src="pheebs.png" alt="profile" class="profile-img"/>
            <h1 class="user-name"> {user.first_name} {user.last_name}</h1>
          </div>
        <SimpleTabs number={user.phone_number} dob={user.date_of_birth}/>
        </Paper>
    )})}
    </div>
  )
};

export default Profile;