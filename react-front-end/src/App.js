import React, {useState} from 'react';
import Home from './components/home-page/Home';
import Navbar from './components/Navbar';
import Map from './components/map-page/Map';
import Forum from './components/forum-page/Forum';
import Profile from './components/profile-page/Profile'
import Login from './Login';
import './App.css'

const App = () => {
  // const [ login, setLogin ] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
      <div className="app">
        <div className="logo">
            <img src="logo/assure-logo.png" alt="assure logo"/>
        </div>

        <div className="page">
          {selected === 0 ? (<Home />) : null}
          {selected === 1 ? (<Map />): null}
          {selected === 2 ? (<Forum />) : null}
          {selected === 3 ? (<Profile />) : null}
        </div>

        <div className="nav">
          <Navbar setSelected={setSelected} selected={selected} />   
        </div>
      </div>
  );
};

export default App;