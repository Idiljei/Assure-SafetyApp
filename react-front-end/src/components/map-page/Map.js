import React, { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { Box } from "@material-ui/core";
import Locate from "./Locate";
import mapStyles from "./mapStyles";
import useStyles from "../Styles";
import MapSearch from "./MapSearch";
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
  const [ markers, setMarkers ] = useState([]);
  const [ selected, setSelected ] = useState(null);
  const classes = useStyles();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  const getPostLocation = async () => {
    try {
      const response = await fetch("http://localhost:8080/forum");
      const jsonData = await response.json();

      jsonData.map(post => {
        const title = post.title;
        const locationObj = JSON.parse(post.address);
        const lat = locationObj.lat;
        const lng = locationObj.lng;
        const markerInfo = {
          title,
          lat, 
          lng
        }
        
        return setMarkers((prev) => [...prev, markerInfo])
      })
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
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <Box className={classes.mapBox}>
        <Box display="flex" alignItems="center">
          <MapSearch panTo={panTo} />
          <Locate panTo={panTo} />
        </Box>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          options={options}
          onLoad={onMapLoad}
        >
          {markers.map((post) => (
              <Marker 
                key={post.title+post.lat+post.lng}
                position={{ lat: post.lat, lng: post.lng }}
                onClick={() => {
                  setSelected(post);
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
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Box>
    </div>
  );
};

export default Map;
