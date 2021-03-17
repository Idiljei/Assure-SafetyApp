import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Box } from '@material-ui/core';
import GetAddress from './ConvertToAdd';
import './forum.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const [ converted, setConverted ] = useState(''); 

  const addressObj = JSON.parse(props.address);
  const lat = addressObj.lat;
  const lng = addressObj.lng;

  return (
    <div class="post">
      <Box>
        <Box display="flex" flexDirection="column">
          <h2>{props.title}</h2>
          <h6><GetAddress lat={lat} lng={lng} converted={converted} setConverted={setConverted}/>
          </h6>
        </Box>

        <Box display="flex" flexDirection="column">
          <h4>{props.description}</h4>
          <h6>Posted: {props.date}</h6>
        </Box>

      </Box>
      <Divider />
    </div>
  );
};

export default Post;