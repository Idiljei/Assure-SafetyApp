import React, { useState, useEffect } from 'react';

const FindSafeSpots = () => {
  const [ policeStations, setPoliceStations] = useState([]);
  const type = ['police', 'hospitals', 'fire+stations'];
  
  const getPlaces = async () => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}+in+Vancouver&key=${process.env.REACT_APP_GOOGLE_KEY}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        mode: 'cors'
      });
      const jsonData = await response.text();
      const results = JSON.parse(jsonData).results;
      console.log(results)
      results.map(data => {
        const coords = data.geometry.location;
        console.log("These are coords:", coords)
        setPoliceStations(prev => [...prev, coords])
      })
  
    } catch (err) {
      console.log(err);
    }

  };
  
  console.log("These are police stations", policeStations)
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div>

    </div>
  )

}

export default FindSafeSpots;