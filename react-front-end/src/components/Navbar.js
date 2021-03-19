import React from "react";
import { Link } from "react-router-dom";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from '@material-ui/icons/People';
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const Navbar = () => {
  return (
    <div>
      <BottomNavigation showLabels >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/forum">
          <BottomNavigationAction label="Forum" icon={<ForumIcon />} />
        </Link>
        <Link to="/safetyNetwork">
          <BottomNavigationAction label="Safety Network" icon={<PeopleIcon  />} />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction label="Profile" icon={<PersonPinIcon />} />
        </Link>
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
