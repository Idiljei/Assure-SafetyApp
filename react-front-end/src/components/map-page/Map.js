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
import Forum from '../forum-page/Forum';
import mapStyles from "./mapStyles";
import useStyles from "../Styles";
import MapSearch from "./MapSearch";
import "./search.css";
import "@reach/combobox/styles.css";
import MarkSafeSpots from "./MarkSafeSpots";

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
  const [ safeSpot, setSafeSpot ] = useState(false);
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

  const mapRef = useRef();

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";

  return (
    <div class="map-page">
      <div class="map-box">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="0"
          paddingTop="2%"
          width="60%"
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
          <MarkSafeSpots safeSpot={safeSpot} setSafeSpot={setSafeSpot} selected={selected} setSelected={setSelected}/>
s
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

        { (selected && !safeSpot) ? (
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
      </div>

      <div class="forum-box">
        <Forum />
      </div>
    </div>
  );
};

export default Map;
