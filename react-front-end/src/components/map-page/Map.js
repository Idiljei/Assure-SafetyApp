import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Box, Button } from "@material-ui/core";
import Locate from "./Locate";
import Legend from "./Legend";
import mapStyles from "./mapStyles";
import useStyles from "../Styles";
import MapSearch from "./MapSearch";
import "./search.css";
import "@reach/combobox/styles.css";

const containerStyle = {
  width: "75%",
  height: "500px",
};

const center = {
  lat: 49.2811956,
  lng: -123.13068,
};

const libraries = ["places"];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const classes = useStyles();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  const getPostLocation = async () => {
    try {
      const response = await fetch("http://localhost:8080/forum");
      const jsonData = await response.json();

      jsonData.map((post) => {
        const title = post.title;
        const locationObj = JSON.parse(post.address);
        const lat = locationObj.lat;
        const lng = locationObj.lng;
        const markerInfo = {
          title,
          lat,
          lng,
        };

        return setMarkers((prev) => [...prev, markerInfo]);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPostLocation();
  }, []);

  const policeMarkers = [
    { lat: 49.2665048, lng: -123.1143029 },
    { lat: 49.2825439, lng: -123.1343405 },
    { lat: 49.2765917, lng: -123.1273855 },
    { lat: 49.2807041, lng: -123.1236826 },
    { lat: 49.286993, lng: -123.1220944 },
    { lat: 49.2871145, lng: -123.1178602 },
    { lat: 49.279315, lng: -123.101608 },
    { lat: 49.28198, lng: -123.0993109 },
  ];

  const fireMarkers = [
    { lat: 49.2864877, lng: -123.1347864 },
    { lat: 49.2835303, lng: -123.1260786 },
    { lat: 49.2779959, lng: -123.1174854 },
    { lat: 49.28339889999999, lng: -123.1000289 },
    { lat: 49.2759724, lng: -123.0894408 },
    { lat: 49.2599251, lng: -123.1034196 },
    { lat: 49.26287199999999, lng: -123.137576 },
    { lat: 49.2647179, lng: -123.1735997 },
  ];

  const mapRef = useRef();

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  // if (!isLoaded) return "Loading maps";

  return (
    <div>
      <Box className={classes.mapBox}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="29%"
          margin="0"
        >
          <Box>
            <MapSearch panTo={panTo} />
          </Box>
          <Box className={classes.findButton}>
            <Locate panTo={panTo} />
          </Box>
        </Box>

        <Legend />

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          options={options}
          onLoad={onMapLoad}
        >
          {markers.map((post) => (
            <Marker
              key={post.title + post.lat + post.lng}
              position={{ lat: post.lat, lng: post.lng }}
              onClick={() => {
                setSelected(post);
              }}
              icon={{
                url: "./report.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
            />
          ))}
          {policeMarkers.map((popo) => (
            <Marker
              // key={post.title + post.lat + post.lng}
              position={{ lat: popo.lat, lng: popo.lng }}
              // onClick={() => {
              //   setSelected(post);
              // }}
              icon={{
                url: "./police.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
            />
          ))}

          {fireMarkers.map((fire) => (
            <Marker
              // key={post.title + post.lat + post.lng}
              position={{ lat: fire.lat, lng: fire.lng }}
              // onClick={() => {
              //   setSelected(post);
              // }}
              icon={{
                url: "./fire-station.svg",
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 17),
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                  {selected.title}
                  <span role="img" aria-label="emoji">
                    ❗️
                  </span>
                </h2>
                <p>
                  <Button>See Details</Button>
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Box>
    </div>
  );
};

export default Map;
