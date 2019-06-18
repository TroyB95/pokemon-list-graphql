import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import PokemonDetails from "./Pages/PokemonDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/:pokemonName" component={PokemonDetails} />
      </div>
    </Router>
  );
}

export default App;
