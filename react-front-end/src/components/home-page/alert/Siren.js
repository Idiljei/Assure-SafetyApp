import React, { useState } from 'react';
import ReactHowler from 'react-howler';

const PlayPause = () => {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <ReactHowler src='./siren.mp3' playing={play} />
      <button onClick={() => setPlay(!play)}>
        {play ? 'Pause' : 'Play'}
      </button>

    </div>
  );
};

export default PlayPause;