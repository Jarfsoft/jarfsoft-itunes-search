import React, { useState } from "react";
import { useSelector } from "react-redux";

import Nav from "./components/Nav";
import ResultsCard from "./components/ResultsCard";
import History from "./components/History";
import "./App.css";
import Statistics from "./components/Statistics";

function App() {
  const [search, setSearch] = useState();
  const list = useSelector((state) => state.favorites.list);
  return (
    <div className="App">
      <Nav change={setSearch} />
      <ResultsCard search={search} />
      <History />
      <Statistics list={list}/>
    </div>
  );
}

export default App;
