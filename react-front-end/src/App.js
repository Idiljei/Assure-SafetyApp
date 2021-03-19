import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home-page/Home";
import Navbar from "./components/Navbar";
import Map from "./components/map-page/Map";
import Profile from "./components/profile-page/Profile";
import SafetyNetworkMap from "./components/safety-network-page/SafetyNetwork";
import "./App.css";

const App = () => {

  return (
    <div className="app">
      <div className="logo">
        <img src="logo/assure-logo.png" alt="assure logo" />
      </div>

      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Map} />
          <Route path="/safetyNetwork" component={SafetyNetworkMap} />
          <Route path="/" component={Home} />
        </Switch>

        <div className="nav">
          <Navbar />
        </div>
      </Router>
    </div>
  );
};

export default App;
