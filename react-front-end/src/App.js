import React, {useState} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Forum from './components/Forum';
import Profile from './components/Profile'

const App = () => {
  const [selected, setSelected] = useState(0);

  return (
  <div>
  <Navbar setSelected={setSelected} selected={selected} />
  
  {selected === 0 ? (<Home />) : null}
  {selected === 1 ? (<Map />): null}
  {selected === 2 ? (<Forum />) : null}
  {selected === 3 ? (<Profile />) : null}

  </div>
  );
};

export default App;