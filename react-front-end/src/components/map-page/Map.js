import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { Box, Button } from "@material-ui/core";
import Locate from "./Locate";
import Forum from '../forum-page/Forum';
import UserAvatar from '../safety-network-page/Avatar';
import mapStyles from "./mapStyles";
import useStyles from "../Styles";
import MapSearch from "./MapSearch";
import MarkSafeSpots from "./MarkSafeSpots";
import FilterButton from "../map-page/FilterButton";
import MapLegend from './Legend';
import MarkIncidents from './MarkIncidents';
import SafetyNetworkMap from "../safety-network-page/SafetyNetwork";
import "./search.css";
import "@reach/combobox/styles.css";

const containerStyle = {
  width: "100%",
  height: "400px",
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
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  const [ filter, setFilter ] = useState(0);
  const [ online, setOnline ] = useState(null);
  const [ userSn, setUserSn ] = useState([]);

  const [ openPost, setOpenPost ] = useState(null);

  const { loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  const checkLocationStatus = async() => {
    try {
    const id = 3;
    const response = await fetch(`http://localhost:8080/snlocation/${id}`)
    const jsonData = await response.json();

    jsonData.map(data => {
      const confirmStatus = data.sharing_location
      setOnline(confirmStatus)
    })}
    catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect(() => {
    checkLocationStatus();
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
    <div className="map">
    <Box display="flex" flexDirection="column">
      <Box className={classes.mapBox}>
        <MapSearch panTo={panTo} />
        <Locate panTo={panTo} />
      </Box>

      <MapLegend />
        
      <Box>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
        onLoad={onMapLoad}
        >
        
        { filter < 2 ? <MarkSafeSpots selected={selected} setSelected={setSelected}/> : null }

        { !filter || filter === 3 ? <SafetyNetworkMap userSn={userSn} setUserSn={setUserSn} selected={selected} setSelected={setSelected}/> : null }

        { !filter || filter === 2 ? <MarkIncidents selected={selected} setSelected={setSelected} /> : null }

        { selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
              { selected.img &&  <UserAvatar selected={selected} online={online} img={selected.img}/> }
                <h2>{ selected.title || selected.name }</h2>
                { selected.address ? <h4>Address: {selected.address}</h4> : null }
                { selected.open ? <h4>Open Now</h4> : null }
                { selected.address ? <h6>Go Here:  </h6> : null}
                { selected.title ? 
                    <div>
                      <Button onClick={() => setOpenPost(selected.id)}>See Details</Button>
                      </div> : null}
                { selected.sharing_location ? <div>Current Sharing Location</div> : <div>Updated: {selected.time}</div> }
              </div>
            </InfoWindow>
          ) : null}

      </GoogleMap>
      </Box>

      <FilterButton filter={filter} setFilter={setFilter} />
      
      <Forum openPost={openPost} selected={selected} />

    </Box>
    </div>
  );
};

export default Map;