import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import { Box } from '@material-ui/core';
import Locate from "./Locate";
import mapStyles from './mapStyles';
import useStyles from '../Styles';
import './search.css'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
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
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  },[]);

  if (loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  return (
    <div>
    <Box className={classes.mapBox} >
      <Box display="flex" alignItems="center">
        <Search panTo={panTo} /> 
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

function Search({ panTo }) {
  const { 
    ready, 
    value, 
    suggestions:{status, data}, setValue,
    clearSuggestions } = usePlacesAutocomplete({ 
    requestOptions: {
      location: {  
        lat: () => -3.745,
        lng: () => -38.523 },
        radius: 200 * 1000, // how many km out but convert to meters
    },
  });

  return (
  <div class="search">
    <Combobox
    onSelect={async (address) => {
      setValue(address, false);
      clearSuggestions();
      try {
        const results =  await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0])
        console.log( lat, lng )   
        panTo({ lat, lng })   
      } catch(error) {
      }
      console.log(address);
    }}
    >
      <ComboboxInput 
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      disabled={!ready}
      placeholder="Enter address"
      /> 
      <ComboboxPopover> 
        <ComboboxList>
      {status ==="OK" && 
      data.map(({ id, description}) => (
        <ComboboxOption key={id} value={description} />
      ))}
         </ComboboxList>
      </ComboboxPopover>
      </Combobox>
  </div>
  );
 }



export default Map;