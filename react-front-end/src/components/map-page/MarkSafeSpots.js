import React, { useState, useEffect } from 'react';
import { Marker, InfoWindow } from "@react-google-maps/api";

const MarkSafeSpots = (props) => {
  const [ policeStations, setPoliceStations ] = useState([]);
  const [ fireStations, setFireStations ] = useState([]);
  const [ hospitals, setHospitals ] = useState([]);
  const setSelected = props.setSelected;
  const selected = props.selected;
  const setSafeSpot = props.setSafeSpot;
  const safeSpot = props.safeSpot;

  const getPlaces = async (query) => {
    try {
      const response = await fetch(`/maps?query=${query}&key=${process.env.REACT_APP_GOOGLE_KEY}`, {
        method: 'GET',
        headers: { "Content-type": "application/json" }
      });
      const jsonData = await response.json();
      const results = jsonData.results;

      results.map(data => {
        const info = {
          name: data.name,
          address: data.formatted_address,
          coords: data.geometry.location,
          open: data.opening_hours
        }
    
        if (query === 'police+stations') {
          setPoliceStations(prev => [...prev, info])
        }
        if (query === 'fire+stations') {
          setFireStations(prev => [...prev, info])
        }

        if (query === 'hospitals') {
          setHospitals(prev => [...prev, info])
        }
      });
  
    } catch (err) {
      console.log(err);
    };

  };
  
  useEffect(() => {
    getPlaces('police+stations');
    getPlaces('hospitals');
    getPlaces('fire+stations')
  }, []);

  console.log("This is hospitals:", hospitals);

  console.log("This is the selected:", selected);

  return (
    <>
    { policeStations.map( popo => (
            <Marker
              position={{ lat: popo.coords.lat, lng: popo.coords.lng}}
              onClick={() => {
                setSelected(popo);
                setSafeSpot(true);
              }}
              icon={{
                url: "./police.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
              />
        ))}

        { fireStations.map( fire => (
            <Marker
              position={{ lat: fire.coords.lat, lng: fire.coords.lng}}
              onClick={() => {
                setSelected(fire);
                setSafeSpot(true);
              }}
              icon={{
                url: "./fire-station.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
              />
        ))}  

        {hospitals.map((mark) => (
            <Marker
              position={{ lat: mark.coords.lat, lng: mark.coords.lng}}
              onClick={() => {
                setSelected(mark)
                setSafeSpot(true)
              }}
              icon={{
                url: "./hospital.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
              />
        ))}

      { (selected && safeSpot) ? (
            <InfoWindow
              position={{ lat: selected.coords.lat, lng: selected.coords.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <h2>
                {selected.name}
                Address: {selected.address}
                { selected.open ? <h4>Open Now</h4> : null }
              </h2>
            </InfoWindow>
          ) : null}       
    </>
  )

}

export default MarkSafeSpots;