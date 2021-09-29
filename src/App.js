import React, { useState } from 'react';

import Nav from './components/Nav';
import ResultsCard from './components/ResultsCard';
import './App.css';

function App() {
  const [search, setSearch] = useState();
  return (
    <div className="App">
      <Nav change={setSearch}/>
      <ResultsCard search={search}/>
    </div>
  );
}

export default App;
