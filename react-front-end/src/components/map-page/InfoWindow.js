import React, { useState } from "react";
import { IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InfoWindow } from "@react-google-maps/api";
import UserAvatar from "../safety-network-page/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import CallIcon from "@material-ui/icons/Call";
import { smsCheckin } from "../home-page/sms";
import BatteryCharging80Icon from '@material-ui/icons/BatteryCharging80';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { format, utcToZonedTime } from "date-fns-tz";
import "../map-page/search.css";
import GetAddress from "../forum-page/ConvertToAdd";

const useStyles = makeStyles({
  open: {
    color: "#44b700",
    fontSize: "small",
  }
});

const getLink = (name) => {
  return `https://www.google.com/maps/search/?api=1&query=${name}`;
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
  const [details, setDetails] = useState(false);
  const [hide, setHide] = useState(false);
  const [ add, setAdd ] = useState(null);
  const selected = props.selected;
  const name = selected.name;
  const lat = selected.lat;
  const lng = selected.lng;
  let date = "";

  if (selected.date) {
    const newDate = new Date(selected.date);
    const timeZone = "PST";
    const zonedDate = utcToZonedTime(newDate, timeZone);
  
    date = format(zonedDate, "Pp");
  }

  const handleClick = () => {
    smsCheckin();
  };

  const toggle = () => {
    setHide(true);
    setDetails(true);
  };

  return (
    <InfoWindow
      position={{ lat: lat, lng: lng }}
      onCloseClick={() => {
        setHide(false);
        setDetails(false);
        props.setSelected(null);
      }}
    >
      <>
      <div class="info-ava-icon">
        {selected.img && (
          <UserAvatar selected={selected} img={selected.img} />
        )}
        {selected.type && (
          <img
            class="info-window-icon"
            src={filterIcon(selected.type)}
            alt="icon"
          />
        )}
        {selected.place && (
          <img
            class="info-window-icon"
            src={filterIcon(selected.place)}
            alt="icon"
          />
        )}

        <h2 class="title-name">{selected.title || selected.name}</h2>
      </div>

      {selected.sharing_location && <div>Currently Sharing Location</div>}
      {!selected.sharing_location && selected.img ? (
        <div>Updated: {selected.time}</div>
      ) : null}

      {selected.sharing_location && (
        <div class="contact-icon">
          <IconButton className={classes.msg} aria-label="call">
            <CallIcon />
          </IconButton>
          <IconButton aria-label="msg" onClick={handleClick}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <div class="battery"><BatteryCharging80Icon fontSize="small"/><h3 class="percent">80%</h3></div>
        </div>
      )}  

        <div class="incident-details">
          {selected.date && <h4 class="info-date">Occurred at: {date}</h4>}
          {selected.title && !hide ? (
            <div class="info-button">
              <Button fontSize="small" onClick={toggle}>
                See Details
              </Button>
            </div>
          ) : null}
          {details && (
            <div>
              <h4>Address: <GetAddress lat={lat} lng={lng} converted={add} setConverted={setAdd}/></h4>
              <h4>Description: {selected.description}</h4>
            </div>
          )}
        </div>

        {selected.address ? (
          <h4 class="info-date"><GetAddress lat={lat} lng={lng} converted={add} setConverted={setAdd}/></h4>
        ) : null}
        {selected.open ? (
          <h4 class="open-now">
            Open Now <FiberManualRecordIcon className={classes.open} />
          </h4>
        ) : null}
        {selected.address ? (
          <a href={getLink(name)}>View on Google Maps</a>
        ) : null}
      </>
    </InfoWindow>
  );
};

export default InfoWindowMarker;
