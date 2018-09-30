import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import LoginForm from "./LoginForm.js";
import CreateAccountForm from "./CreateAccountForm.js";
import DashboardContainer from "./DashboardContainer.js"


class FixedNavbar extends Component {
  render() {
    return (
      <div className="w3-top">
        <HashRouter>
          <div className="w3-bar w3-teal w3-card w3-left-align w3-large">
            <a className="w3-bar-item w3-button w3-padding-large w3-white"><NavLink exact to="/">Home</NavLink></a>
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><NavLink to="/login">Login</NavLink></a>
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><NavLink to="/signup">Signup</NavLink></a>
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><NavLink to="/private">Dashboard</NavLink></a>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default FixedNavbar;
