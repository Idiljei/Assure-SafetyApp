import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Box,
} from "@material-ui/core";
import "../map-page/search.css";

const useStyles = makeStyles({
  search: {
    position: "absolute",
    width: "94%",
    zIndex: 6,
  },
  suggestions: {
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
});

const Search = (props) => {
  const classes = useStyles();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ e, lat, lng }) => {
        props.setAddress({ lat, lng });
      })
      .catch((error) => {
        console.log(error);
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
          <ListItem button>
            <ListItemText
              key={place_id}
              onClick={handleSelect(suggestion)}
              primary={main_text}
              secondary={secondary_text}
            />
          </ListItem>
          <Divider />
        </div>
      );
    });

  return (
    <Box className={classes.suggestions}>
      <Box>
        <TextField
          value={value}
          fullWidth
          required
          margin="normal"
          onChange={handleInput}
          disabled={!ready}
          placeholder="Enter Address*"
        />
      </Box>

      <Box>
        {status === "OK" ? (
          <Paper className={classes.search}>
            <List>{renderSuggestions()}</List>
          </Paper>
        ) : null}
      </Box>
    </Box>
  );
};

export default Search;
