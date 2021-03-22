import React from 'react';
import { IconButton, Button } from '@material-ui/core';
  import { makeStyles } from '@material-ui/core/styles'
import { InfoWindow } from "@react-google-maps/api";
import UserAvatar from '../safety-network-page/Avatar';
import CallIcon from '@material-ui/icons/Call';
import { smsCheckin } from '../home-page/sms';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import '../map-page/search.css';

const useStyles = makeStyles({
  open: {
    color: '#44b700',
    fontSize: 'small',
  }
});

const getLink = (name) => {
  return `https://www.google.com/maps/search/?api=1&query=${name}`
};

const filterIcon = (iconType) => {
  if (iconType === "Theft") {
    return "./burglar.svg";
  }

  if (iconType === "Harassment") {
    return "./harassment.svg";
  }

  if (iconType === "Other") {
    return "./report.svg";
  }

  if (iconType === "hospitals") {
    return "./hospital.svg";
  }

  if (iconType === "fire+stations") {
    return "./fire-station.svg";
  }

  if (iconType === "police+stations") {
    return "./police.svg";
  }
};

const InfoWindowMarker = (props) => {
  const classes = useStyles();
  const selected = props.selected;
  const add = selected.address;
  const name = selected.name;
  const lat = selected.lat;
  const lng = selected.lng;

  const handleClick = () => {
    smsCheckin()
  }
  
  return (
    <InfoWindow
      position={{ lat: lat, lng: lng }}
      onCloseClick={() => {
        props.setSelected(null);
      }}
    >
      <>
        <div class="info-ava-icon">
          { selected.img &&  <UserAvatar selected={selected} img={selected.img}/> }
          { selected.type &&  <img class="info-window-icon" src={filterIcon(selected.type)} alt="icon" /> }
          { selected.place && <img class="info-window-icon" src={filterIcon(selected.place)} alt="icon" /> }
          <h2 class="title-name">{ selected.title || selected.name }</h2>

          { selected.sharing_location &&
              <div>
                <IconButton aria-label="call">
                  <CallIcon />
                </IconButton>
                <IconButton aria-label="msg" onClick={handleClick}>
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </div> }

        </div>

          { selected.sharing_location && <div>Currently Sharing Location</div> }
          { !selected.sharing_location && selected.img ?  <div>Updated: {selected.time}</div> : null }

        <div class="incident-details">
          { selected.date && <h4 class="info-date">Occurred at: {selected.date}</h4>}
          { selected.title ? 
              <div class="info-button">
              <Button variant="outlined" onClick={() => props.setOpenPost(selected.id)}>See Details</Button>
              </div> : null}
        </div>
        
          { selected.address ? <h4 class="info-date">{add.substring(0, add.length - 20)}</h4> : null }
          { selected.open ? 
              <h4 class="open-now">Open Now <FiberManualRecordIcon className={classes.open}/>
              </h4> : null }
          { selected.address ? <a href={getLink(name)}>View on Google Maps</a> : null}
          
      </>
    </InfoWindow>
  )
};

export default InfoWindowMarker;