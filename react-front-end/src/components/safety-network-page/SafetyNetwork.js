import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Box } from "@material-ui/core";
import Locate from "../map-page/Locate";
import Legend from "../map-page/Legend";
import mapStyles from "../map-page/mapStyles";
import useStyles from "../Styles";
import MapSearch from "../map-page/MapSearch";
import "@reach/combobox/styles.css";
import "../map-page/search.css";

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

      </GoogleMap>
      </Box>

      <Legend />

      <Box className={classes.contacts}>
      </Box>

    </Box>
    </div>
  );
};

export default SafetyNetworkMap;