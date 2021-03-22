import React, { useState, useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    border: "solid 2px",
  },
});

const MarkIncidents = (props) => {
  const classes = useStyles();
  const [theft, setTheft] = useState([]);
  const [harassment, setHarassment] = useState([]);
  const [other, setOther] = useState([]);

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
        const date = post.date;
        const description = post.description;

        const markerInfo = {
          id,
          type,
          date,
          description,
          title,
          lat,
          lng,
        };

        if (type === "Theft") {
          return setTheft((prev) => [...prev, markerInfo]);
        }

        if (type === "Harassment") {
          return setHarassment((prev) => [...prev, markerInfo]);
        }

        if (type === "Other") {
          return setOther((prev) => [...prev, markerInfo]);
        }
        return;
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
      {theft.map((post) => (
        <Marker
          key={post.title + post.lat + post.lng}
          position={{ lat: post.lat, lng: post.lng }}
          class={classes.icon}
          onClick={() => {
            props.setSelected(post);
          }}
          icon={{
            url: "./burglar.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 17),
          }}
        />
      ))}

      {harassment.map((post) => (
        <Marker
          key={post.title + post.lat + post.lng}
          position={{ lat: post.lat, lng: post.lng }}
          onClick={() => {
            props.setSelected(post);
          }}
          icon={{
            url: "./harassment.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 17),
          }}
        />
      ))}

      {other.map((post) => (
        <Marker
          key={post.title + post.lat + post.lng}
          position={{ lat: post.lat, lng: post.lng }}
          onClick={() => {
            props.setSelected(post);
          }}
          icon={{
            url: "./report.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 17),
          }}
        />
      ))}
    </>
  );
};

export default MarkIncidents;
