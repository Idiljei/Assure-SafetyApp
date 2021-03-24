import React from 'react'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import './search.css'

const MapSearch = ( props ) => {
  const panTo = props.panTo;

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
        className="search-box"
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results =  await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0])
            panTo({ lat, lng })  
          } catch(error) {
          }
        }}
        >
        <ComboboxInput 
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder="Enter Address"
        style={{ 
          width: 242,
          border: "solid #B7B7B7 1px",
          borderRadius: "4px",
          fontSize: "1rem",
          fontFamily: "Roboto",
          padding: "1rem"
        }}
        /> 
        <ComboboxPopover > 
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

export default MapSearch;