import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import { Box } from '@material-ui/core';
import Locate from "./Locate";
import mapStyles from './mapStyles';
import useStyles from '../Styles';
import MapSearch from './MapSearch';
import "@reach/combobox/styles.css";

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  // lat: -3.745,
  // lng: -38.523
  lat: 49.2811956,
  lng: -123.13068
};

const libraries = ["places"];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const classes = useStyles();
    
  const { isLoaded, loadError } = useJsApiLoader ({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
      libraries
    })
  
  const onMapClick = useCallback((event) => {
      setMarkers(prev => [
        ...prev, {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date()
        }
      ])
    }, []);

  const mapRef = useRef();

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  },[]);


  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);


  if (loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  return (
    <div>
    <Box className={classes.mapBox} >
      <Box display="flex" alignItems="center">
        <MapSearch panTo={panTo} /> 
        <Locate panTo={panTo} />
      </Box>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker => (
        <Marker 
          key={marker.time.toISOString()}
          position={{lat: marker.lat, lng: marker.lng}}
          onClick = { () => { setSelected(marker) }}
        
          />)))}

        {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => {setSelected(null)}}>
          <div>
            <h2>Crime Reported <span role="img" aria-label="emoji">❗️</span></h2>
            <p>Spotted { formatRelative(selected.time, new Date()) }</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
      </Box>
        </div>
  )};

export default Map;