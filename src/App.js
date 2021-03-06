import React, { useState } from "react";

import Nav from "./components/Nav";
import ResultsCard from "./components/ResultsCard";
import History from "./components/History";
import "./App.css";
import Statistics from "./components/Statistics";

function App() {
  const [search, setSearch] = useState();
  return (
    <div className="App">
      <Nav change={setSearch} />
      <ResultsCard search={search} />
      <History />
      <Statistics/>
    </div>
  );
}

export default App;
