import React, {useState} from 'react';
import Home from './components/home-page/Home';
import Navbar from './components/Navbar';
import Map from './components/map-page/Map';
import Forum from './components/forum-page/Forum';
import Profile from './components/profile-page/Profile'

import './App.css'

const App = () => {
  const [selected, setSelected] = useState(0);

  return (
  <div class="app">
    <div class="logo">
        <img src="logo/assure-logo.png" alt="assure logo"/>
    </div>

    <div class="page">
      {selected === 0 ? (<Home />) : null}
      {selected === 1 ? (<Map />): null}
      {selected === 2 ? (<Forum />) : null}
      {selected === 3 ? (<Profile />) : null}
    </div>

    <div class="nav">
      <Navbar setSelected={setSelected} selected={selected} />   
    </div>
  </div>
  );
};

export default App;