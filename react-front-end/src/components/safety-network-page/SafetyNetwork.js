import React, { useState, useEffect, useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { Box } from "@material-ui/core";
import Locate from "../map-page/Locate";
import mapStyles from "../map-page/mapStyles";
import useStyles from "../Styles";
import MapSearch from "../map-page/MapSearch";
import "@reach/combobox/styles.css";
import "../map-page/search.css";
import { parse } from "date-fns";

const containerStyle = {
  width: "100%",
  height: "325px",
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

const SafetyNetworkMap = () => {
  const classes = useStyles();
  const [ userSn, setUserSn ] = useState([]);
  const [ selected, setSelected ] = useState(null);

  const getUserNetwork = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/snlocation/${id}`);
      const jsonData = await response.json();
      
    jsonData.map(data => {

      const parsed = JSON.parse(data.current_location)

      const userInfo = {
        name: data.first_name, 
        number: data.phone_number,
        lat: parsed.lat,
        lng: parsed.lng
      }
      
      return setUserSn((prev) => [...prev, userInfo])
    })

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUserNetwork();
  }, []);

  const { loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

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
    <div className="map">
    <Box display="flex" flexDirection="column">
      <Box className={classes.mapBox}>
        <MapSearch panTo={panTo} />
        <Locate panTo={panTo} />
      </Box>

      <Box>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
        onLoad={onMapLoad}
        >

      { userSn.map((sn) => {
          return(
          <Marker 
            position={{ lat: sn.lat, lng: sn.lng }}
            onClick={() => {
              setSelected(sn);
            }}
            /> )
        })}

      { selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => {
            setSelected(null)
          }}
        >
          <div>
            <h2>{ selected.name }</h2>
            <h2>{ selected.number }</h2>
          </div>
        </InfoWindow>
      ) : null } 

      </GoogleMap>
      </Box>

      <Box className={classes.contacts}>
      </Box>

    </Box>
    </div>
  );
};

export default SafetyNetworkMap;