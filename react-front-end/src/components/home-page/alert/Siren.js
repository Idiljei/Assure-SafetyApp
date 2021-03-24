import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import SurroundSoundOutlinedIcon from '@material-ui/icons/SurroundSoundOutlined';
import { IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
}));

const PlayPause = () => {
  const [play, setPlay] = useState(false); 
  const classes = useStyles();
  

  return (
    <div>
      <ReactHowler src='./siren.mp3' playing={play} />
      <IconButton > 
      <SurroundSoundOutlinedIcon onClick={() => setPlay(!play)} className={classes.icon} />
        {play}
      </IconButton>

    </div>
  );
};

export default PlayPause;