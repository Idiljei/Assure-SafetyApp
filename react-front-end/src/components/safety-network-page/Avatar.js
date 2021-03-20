import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default function UserAvatar(props) {
  const [ online, setOnline ] = useState(null);

  const checkLocationStatus = async() => {
    try {
    const id = 9;
    const response = await fetch(`http://localhost:8080/user/${id}`)
    const jsonData = await response.json();

    jsonData.map(data => {
      const confirmStatus = data.sharing_location
      return setOnline(confirmStatus)
    })}
    catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    checkLocationStatus();
  }, []);

  return (
    <div>
    { online ? 
      <StyledBadge overlap="circle"
        variant="dot"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Avatar alt="avatar" src={props.img} />
      </StyledBadge> : <Avatar alt="avatar" src={props.img} /> }
    </div>
  );
}
