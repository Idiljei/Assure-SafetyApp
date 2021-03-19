import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home-page/Home";
import Navbar from "./components/Navbar";
import Map from "./components/map-page/Map";
import Forum from "./components/forum-page/Forum";
import Profile from "./components/profile-page/Profile";
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
          <Route path="/map" component={Map} />
          <Route path="/forum" component={Forum} />
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
