import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from './ProfileTab';
import './profileStyles.css'

const profileStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1.5em",
    marginTop: "0.5em",
    width: "85%"
  }
});

const Profile = () => {
  const classes = profileStyles();

  return (
    <div class="profile">
      <Paper elevation={3} className={classes.root}>
        <div class="profile-box">
          <img src="pheebs.png" alt="profile" class="profile-img"/>
          <h1 class="user-name"> Pheobe Buffay </h1>
        </div>
      <SimpleTabs number="604 304 4033" dob="May 23, 1991" />
      </Paper>
    </div>
  );
};

export default Profile;