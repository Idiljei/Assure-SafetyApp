import React, { useState } from "react";
import { Divider, Box } from "@material-ui/core";
import { format, utcToZonedTime } from "date-fns-tz";
import GetAddress from "./ConvertToAdd";
import "./forum.css";

const Post = (props) => {
  const [converted, setConverted] = useState("");
  const newDate = new Date(props.date);
  const timeZone = "PST";
  const zonedDate = utcToZonedTime(newDate, timeZone);

  const date = format(zonedDate, "Pp");

  const addressObj = JSON.parse(props.address);
  const lat = addressObj.lat;
  const lng = addressObj.lng;

  return (
    <>
      <Box>
        <Box display="flex" flexDirection="column">
          <h2 class="post-title">{props.title}</h2>
          <h5 class="date">Date of Incident: {date}</h5>
          <Box display="flex" alignContent="flex-start">
            <h5 class="address">Incident Type: {props.type}</h5>
            <h5 class="address">Location:</h5>
            <h5 class="address">
              <GetAddress
                lat={lat}
                lng={lng}
                converted={converted}
                setConverted={setConverted}
              />
            </h5>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column">
          <h4 class="des">Description: {props.description}</h4>
          <h5 class="user">Posted by: {props.user}</h5>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default Post;
