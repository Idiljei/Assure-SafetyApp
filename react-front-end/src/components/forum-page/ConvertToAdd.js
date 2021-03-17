import React from 'react';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage("en");

const GetAddress = (props) => {
  const lat = props.lat;
  const lng = props.lng;

  Geocode.fromLatLng(lat, lng)
  .then((response) => {
    const comp = response.results[0].address_components;
    const num = comp[0].short_name;
    const street = comp[1].short_name;
    const city = comp[3].short_name;
    const prov = comp[5].short_name;

    const address = ` ${num} ${street}, ${city}, ${prov}`
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