import React from 'react';
import { Button } from '@material-ui/core';
import { InfoWindow } from "@react-google-maps/api";
import UserAvatar from '../safety-network-page/Avatar';
import '../map-page/search.css';

const InfoWindowMarker = (props) => {
  const selected = props.selected;

  console.log("This is the selected:", selected)

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
  };

  return (
    <InfoWindow
      position={{ lat: selected.lat, lng: selected.lng }}
      onCloseClick={() => {
        props.setSelected(null);
      }}
    >
      <>
        <div class="info-ava-icon">
          { selected.img &&  <UserAvatar selected={selected} img={selected.img}/> }

          { selected.type && 
          <img class="info-window-icon" src={filterIcon(selected.type)} alt="icon" />
          }
          
          <h2 class="title-name">{ selected.title || selected.name }</h2>
        </div>

        <div class="incident-details">
          { selected.date && <h4 class="info-date">Occurred at: {selected.date}</h4>}
          { selected.title ? 
              <div>
              <Button variant="outlined" onClick={() => props.setOpenPost(selected.id)}>See Details</Button>
              </div> : null}
        </div>

          { selected.address ? <h4>Address: {selected.address}</h4> : null }
          { selected.open ? <h4>Open Now</h4> : null }
          { selected.address ? <h6>Go Here:  </h6> : null}
          { selected.sharing_location && <div>Currently Sharing Location</div> }
          { !selected.sharing_location && selected.img ?  <div>Updated: {selected.time}</div> : null }
      </>
    </InfoWindow>
  )
};

export default InfoWindowMarker;