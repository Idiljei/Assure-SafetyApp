import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {smsCheckin} from '../home-page/sms'

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


const handleClick = () => {
  smsCheckin()
  }

export default function UserAvatar(props) {
  const selected = props.selected;

  return (
    <div>
      { selected.sharing_location ?
        <StyledBadge overlap="circle"
          variant="dot"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar alt="avatar" src={props.img} />

            <CallIcon />
            <ChatBubbleOutlineIcon onClick={handleClick}/>
        </StyledBadge> : <Avatar alt="avatar" src={props.img} />
      }
    </div>
  );
}
