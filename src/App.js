import React from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Listing from './component/Listing';
import Protected from './component/Protected';
import Nav from './component/Nav';

import Auth from './component/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />

        <Switch>
          <Route path="/about">
            <Protected cmp={About} />
          </Route>
          <Route path="/home">
            <Protected cmp={Home} />
          </Route>
          <Route path="/list">
            <Protected cmp={Listing} />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
