import React from "react";
import { Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";


const Navbar = () => {
  return (
    <div>
      <BottomNavigation>
        <Link to="/">
          <BottomNavigationAction showLabel label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/forum">
          <BottomNavigationAction showLabel label="Map" icon={<RoomIcon />} />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction showLabel label="Profile" icon={<PersonPinIcon />} />
        </Link>
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
