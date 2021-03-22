import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleTabs from "./profile-tabs/ProfileTab";
import EditIcon from "@material-ui/icons/Edit";
import "./profileStyles.css";

const profileStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    color: "#f7f7f7",
  },
});

const Profile = () => {
  const classes = profileStyles();
  const [users, setUser] = useState([]);
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    if (selected) return setSelected(false);
    if (!selected) return setSelected(true);
  };

  const getUser = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/user/${id}`);
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
    <div classNames="profile">
      {users.map((user) => {
        return (
          <Box
            display="flex"
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={user.img} alt="profile" class="profile-img" />
              <Box display="flex" alignItems="center">
                <h1 class="user-name">
                  {" "}
                  {user.first_name} {user.last_name}
                </h1>
                <IconButton aria-label="edit">
                  <EditIcon className={classes.icon} onClick={toggle} />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <SimpleTabs
                number={user.phone_number}
                dob={user.date_of_birth}
                selected={selected}
              />
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default Profile;
