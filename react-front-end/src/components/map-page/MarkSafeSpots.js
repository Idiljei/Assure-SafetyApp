import React, { useState, useEffect } from "react";
import { Marker } from "@react-google-maps/api";

const MarkSafeSpots = (props) => {
  const [policeStations, setPoliceStations] = useState([]);
  const [fireStations, setFireStations] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const setSelected = props.setSelected;

  const getPlaces = async (query) => {
    try {
      const response = await fetch(
        `/maps?query=${query}&key=${process.env.REACT_APP_GOOGLE_KEY}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const jsonData = await response.json();
      const results = jsonData.results;

      results.map((data) => {
        const info = {
          name: data.name,
          address: data.formatted_address,
          lat: data.geometry.location.lat,
          lng: data.geometry.location.lng,
          open: data.opening_hours,
          place: query,
        };

        if (query === "police+stations+in+Vancouver") {
          return setPoliceStations((prev) => [...prev, info]);
        }
        if (query === "fire+stations+in+Vancouver") {
          return setFireStations((prev) => [...prev, info]);
        }

        if (query === "hospitals+in+Vancouver") {
          return setHospitals((prev) => [...prev, info]);
        }
        return;
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlaces("police+stations+in+Vancouver");
    getPlaces("hospitals+in+Vancouver");
    getPlaces("fire+stations+in+Vancouver");
  }, []);

  return (
    <>
      {policeStations.map((popo) => (
        <Marker
          position={{ lat: popo.lat, lng: popo.lng }}
          onClick={() => {
            setSelected(popo);
          }}
          icon={{
            url: "./police.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 17),
          }}
        />
      ))}

      {fireStations.map((fire) => (
        <Marker
          position={{ lat: fire.lat, lng: fire.lng }}
          onClick={() => {
            setSelected(fire);
          }}
          icon={{
            url: "./fire-station.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 17),
          }}
        />
      ))}

      {hospitals.map((mark) => (
        <Marker
          position={{ lat: mark.lat, lng: mark.lng }}
          onClick={() => {
            setSelected(mark);
          }}
          icon={{
            url: "./hospital.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 17),
          }}
        />
      ))}
    </>
  );
};

export default MarkSafeSpots;
