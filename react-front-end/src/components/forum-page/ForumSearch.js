import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { TextField, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import '../map-page/search.css';

const Search = (props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ e, lat, lng }) => {
        props.setAddress({ lat, lng})
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div>
          <ListItemText button key={place_id} onClick={handleSelect(suggestion)} primary={main_text} secondary={secondary_text} />
          <Divider />
        </div>
      );
    });

  return (
    <div class="forum-search">
      <TextField
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter Address"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}

      {status === "OK" &&  <List>{renderSuggestions()}</List>}
    </div>
  );
};

export default Search;