import React, {useState} from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Map from './components/Map'

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
  <div>
  <Navbar setSelected={setSelected} selected={selected} />
  
  {selected === 1 ? (<Map />) : (<Home />)}

  </div>
  );
};

export default App;