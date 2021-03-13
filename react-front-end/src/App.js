import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Map from './components/Map'

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
  <div>
  <Navbar setSelected={setSelected} selected={selected} />
  
  {selected === 1 ? (<Map />) : null}

  </div>
  );
};

export default App;