import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from "date-fns";

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
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

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
  }, [])

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  },[]);

  if (loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";
  

  return (
    <div>
    <h1> Safety App <span>🤴🏼</span></h1>
    <Locate panTo={panTo} />
    
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
            <h2>Crime Reported❗️</h2>
            <p>Spotted { formatRelative(selected.time, new Date()) }</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
      </div>
  )

  function Locate({panTo}) {
    return <button  onClick={() => {
      navigator.geolocation.getCurrentPosition((position) => panTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }), () => null)
    }}>Me</button>
  }
}
