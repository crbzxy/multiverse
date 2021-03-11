import React from 'react';

import "./Scss/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hueso from "../src/views/Hueso"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/">
              <Hueso/>
            </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;