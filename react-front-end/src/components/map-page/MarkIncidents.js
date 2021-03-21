import React, { useState, useEffect } from 'react';
import { Marker } from '@react-google-maps/api';

const MarkIncidents = (props) => {
  const [ theft, setTheft ] = useState([]);
  const [ harassment, setHarassment ] = useState([]);
  const [ other, setOther ] = useState([]);

  const getPostLocation = async () => {
    try {
      const response = await fetch("http://localhost:8080/forum");
      const jsonData = await response.json();

      jsonData.map((post) => {
        const title = post.title;
        const locationObj = JSON.parse(post.address);
        const lat = locationObj.lat;
        const lng = locationObj.lng;
        const id = post.id;
        const type = post.incident_type;

        const markerInfo = {
          id,
          type,
          title,
          lat,
          lng,
        };

        if (type === "Theft") {
          return setTheft(prev => [...prev, markerInfo])
        }

        if (type === "Harassment") {
          return setHarassment(prev => [...prev, markerInfo])
        }

        if (type === "Other") {
          return setOther(prev => [...prev, markerInfo])
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPostLocation();
  }, []);

  return (
    <>
    { theft.map((post) => (
          <Marker
            key={post.title + post.lat + post.lng}
            position={{ lat: post.lat, lng: post.lng }}
            onClick={() => {
              props.setSelected(post)
            }}
            icon={{
              url: "./burglar.svg",
              scaledSize: new window.google.maps.Size(25, 25),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 17)
            }}
          />
        ))}

    { harassment.map((post) => (
              <Marker
                key={post.title + post.lat + post.lng}
                position={{ lat: post.lat, lng: post.lng }}
                onClick={() => {
                  props.setSelected(post)
                }}
                icon={{
                  url: "./harassment.svg",
                  scaledSize: new window.google.maps.Size(25, 25),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(17, 17)
                }}
              />
            ))}

    { other.map((post) => (
              <Marker
                key={post.title + post.lat + post.lng}
                position={{ lat: post.lat, lng: post.lng }}
                onClick={() => {
                  props.setSelected(post)
                }}
                icon={{
                  url: "./report.svg",
                  scaledSize: new window.google.maps.Size(25, 25),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(17, 17)
                }}
              />
            ))}
    </>
  )
};

export default MarkIncidents;