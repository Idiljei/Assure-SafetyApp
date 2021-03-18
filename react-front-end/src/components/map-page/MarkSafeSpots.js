import React, { useState, useEffect } from 'react';
import { Marker } from "@react-google-maps/api";

const MarkSafeSpots = (props) => {
  const policeStations = props.policeStations;
  const setPoliceStations = props.setPoliceStations;
  
  const getPlaces = () => {
    try {
      const response = fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=police+in+Vancouver&key=${process.env.REACT_APP_GOOGLE_KEY}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GOOGLE_KEY}`,
          "Content-type": "application/json",
        },
        mode: 'cors'
      });
      const jsonData = response.text();
      const results = JSON.parse(jsonData).results;
      console.log(results)
      results.map(data => {
        
        const coords = data.geometry.location;
        console.log("These are coords:", coords)
        setPoliceStations(prev => [...prev, coords])
      })
  
    } catch (err) {
      console.log(err);
    }

  };
  
  console.log("These are police stations", policeStations)
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div>

    { policeStations !== [] ?

      policeStations.map( popo => {
        return (
          <div>
            <Marker
              position={{ lat: popo.lat, lng: popo.lng}}
              icon={{
                url: "./police.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
              />
          </div>
        )
      }) : null }      
    </div>
  )

}

export default MarkSafeSpots;