import React from "react";
import "./App.css";
import Base from "./Game/base";
import GameMode from "./GameMode/GameMode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/modes">
            <GameMode />
          </Route>
          <Route path="/game">
            <Base array={[1, 2, 3, 4, 5, 6]} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
