import React from "react";
import "./App.css";
import Base from "./Game/base";
import GameMode from "./GameMode/GameMode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Screen from "./Home/screen";
import Players from "./Home/selectPlayer";
import Versus from "./GameMode/versus";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/vs">
            <Versus />
          </Route>
          <Route exact path="/selectplayers">
            <Players />
          </Route>
          <Route exact path="/">
            <Screen />
          </Route>
          <Route exact path="/screen">
            <Home />
          </Route>
          <Route exact path="/modes">
            <GameMode />
          </Route>
          <Route path="/game">
            <Base array={[1, 2, 3, 4]} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
