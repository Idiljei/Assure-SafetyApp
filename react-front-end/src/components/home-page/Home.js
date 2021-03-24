import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import LocationButton from "./alert/LocationButton";
import EmergencyButton from "./alert/EmergencyButton";
import useStyles from "../Styles";
import PlayPause from "../home-page/alert/Siren";
import "././alert/Alertpopup.css";

const Home = () => {
  const classes = useStyles();
  const [userStatus, setUserStatus] = useState(null);
  const [policeStatus, setPoliceStatus] = useState(null);

  const checkLocationStatus = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/user/${id}`);
      const jsonData = await response.json();

      jsonData.map((data) => {
        const confirmStatus = data.sharing_location;
        return setUserStatus(confirmStatus);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkLocationStatus();
  }, []);

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <img class="logo-picture" src="logo/assure-logo.png" alt="assure logo" />
        <div class="alarm">
        <PlayPause></PlayPause>
        </div>
      </Box>

      <Box className={classes.homeBox}>
        <Box margin="2em">
          <LocationButton
            id="location"
            userStatus={userStatus}
            setUserStatus={setUserStatus}
            checkLocationStatus={checkLocationStatus}
          />
        </Box>

        <Box margin="2em">
          <EmergencyButton
            id="police"
            policeStatus={policeStatus}
            setPoliceStatus={setPoliceStatus}
          />
        </Box>

        <Box>
        </Box>


      </Box>
    </div>
  );
};

export default Home;
