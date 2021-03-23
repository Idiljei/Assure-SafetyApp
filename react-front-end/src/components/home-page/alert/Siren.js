import React from 'react';
import soundOff from '../alert/siren.mp3';
import {Howl, Howler} from 'howler'

const Siren = () => {
const audioClips = [
  {sound: soundOff, label: 'SIREN'}
]

const soundPlay = (src) => {
  const sound = new Howl({
    src 
  })
  sound.play()
}

const RenderButtonandSound = () => {
  return audioClips.map((soundObj, index) => {
    return (
      <button key={index} onClick={() => soundPlay(soundObj.sound)}>
        {soundObj.label}
      </button>
    )
  })
}

Howler.volume(1.0)
  return (
    <div>
      {RenderButtonandSound()}
    </div>
  );
};

export default Siren;