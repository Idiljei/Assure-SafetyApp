import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home-page/Home";
import Navbar from "./components/Navbar";
import Map from "./components/map-page/Map";
import Profile from "./components/profile-page/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Map} />
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
