import React from 'react';

import "./Scss/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Galeria from "../src/views/Galeria"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/">
              
              <Galeria/>
            </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;