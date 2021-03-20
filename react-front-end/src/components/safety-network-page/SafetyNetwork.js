import React, { useState, useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import { formatDistance } from "date-fns";
import "@reach/combobox/styles.css";
import "../map-page/search.css";
import './network.css'

const SafetyNetworkMap = (props) => {
  const [ userSn, setUserSn ] = useState([]);
  const selected = props.selected;
  const setSelected = props.setSelected;

  const getUserNetwork = async () => {
    try {
      const id = 3;
      const response = await fetch(`http://localhost:8080/snlocation/${id}`);
      const jsonData = await response.json();

    jsonData.map(data => {
      const parsed = JSON.parse(data.current_location)

      const userInfo = {
        name: data.first_name, 
        number: data.phone_number,
        lat: parsed.lat,
        lng: parsed.lng,
        img: data.img,
        sharing_location: data.sharing_location, 
        time: formatDistance(new Date(data.updated_at), new Date(), { addSuffix: true })
      }

      return setUserSn((prev) => [...prev, userInfo])
    })

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUserNetwork();
  }, []);

  return (
    <div className="map">
      { userSn.map((sn) => {
          return(
            <Marker
            position={{ lat: sn.lat, lng: sn.lng }}
            onClick={() => {
              setSelected(sn);
            }}
            icon={{
              url: sn.img,
              scaledSize: new window.google.maps.Size(35, 35),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 17),
            }}
            />)
        })}
    </div>
  );
};

export default SafetyNetworkMap;