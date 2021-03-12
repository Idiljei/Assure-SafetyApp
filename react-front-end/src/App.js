import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const libraries = ["places"];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

export default function App() {
  const { isLoaded, loadError } = useJsApiLoader ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  })
  const [markers, setMarkers] = useState([])

  if (loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";
  

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])



  return (
    <div>
    <h1> Safety App <span>🤴🏼</span></h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
        onClick={(event) => {
          setMarkers(prev => [
            ...prev, {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date()
            }
          ])
        }}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {markers.map((marker => (
        <Marker 
          key={marker.time.toISOString()}
          position={{lat: marker.lat, lng: marker.lng}}  
          />)))}
      </GoogleMap>
      </div>
  )
}
