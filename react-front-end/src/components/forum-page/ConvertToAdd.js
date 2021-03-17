import React from 'react';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage("en");

const GetAddress = (props) => {
  const lat = props.lat;
  const lng = props.lng;

  Geocode.fromLatLng(lat, lng)
  .then((response) => {
    const address = response.results[0].formatted_address;
    props.setConverted(address)
  })
  .catch( err => console.log(err))

  return (
    <div>
      {props.converted}
    </div>
  )
}

export default GetAddress;