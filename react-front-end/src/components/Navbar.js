import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Navbar = ( { setSelected, selected } ) => {
  return (
    <div>
      <BottomNavigation
        value={selected}
        onChange={(event, newValue) => {
          setSelected(newValue);
        }}
        showLabels
        >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Map" icon={<RoomIcon />} />
        <BottomNavigationAction label="Forum" icon={<ForumIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonPinIcon />} />
      </BottomNavigation>
      
    </div>
  );
};

export default Navbar;