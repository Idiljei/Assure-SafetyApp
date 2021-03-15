import React, {useState} from "react"; 
import PlacesAutocomplete from "react-places-autocomplete";

const SearchApi = () => {

  const [address, setAddress] = useState("")
  const handleChange = (value) => {
    setAddress(value)
  }

  const handleSelect = (value) => {
    setAddress(value)
  }

  return( <div> 
    <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
      {( {getInputProps, suggestions, getSuggestionItemProps, loading} ) => (
        <div>
          <input {...getInputProps({
            placeholder: 'Enter Address ...',
          })} />
        {/* Show the suggestions are loading */}
        <div>
          {loading && <div>Loading...</div>}
          {suggestions.map((suggestion) => {
            const style = suggestion.active ? 
            {backgroundColor: "5e00ff", cursor: "pointer"} : 
            { backgroundColor: "ffffff", cursor: "pointer" }

            return (
              <div {...getSuggestionItemProps(suggestion, {style})} >
                {suggestion.description}
              </div>
            )
          })}
           </div>

        </div>
      )}
     </PlacesAutocomplete>
   </div>

 

)};

export default SearchApi;