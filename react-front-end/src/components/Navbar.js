import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bottom: {
    textDecoration: "none",
  },
  color: {
    color: "#ACACAC"
  }
})

const Navbar = () => {
  const classes = useStyles();
  const [ selected, setSelected ] = useState(2);

  return (
    <div>
      <BottomNavigation>
        <Link to="/" className={classes.bottom}>
          <BottomNavigationAction 
            onClick={() => setSelected(1)} 
            showLabel 
            label="Home" 
            icon={<HomeIcon className={ selected !== 1 ? classes.color : null} />} />
        </Link>
        <Link to="/forum" className={classes.bottom}>
          <BottomNavigationAction onClick={() => setSelected(2)} showLabel label="Map" icon={<RoomIcon className={ selected !==2 ? classes.color : null} />} />
        </Link>
        <Link to="/profile" className={classes.bottom}>
          <BottomNavigationAction onClick={() => setSelected(3)} showLabel label="Profile" icon={<PersonPinIcon className={ selected !==3 ? classes.color : null} />} />
        </Link>
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
