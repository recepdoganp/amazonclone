import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Style
import "./App.css";

// Components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          {/* Default Route always at the bottom */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
