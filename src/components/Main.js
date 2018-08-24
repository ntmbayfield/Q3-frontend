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


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Welcome to the Rex-2-The-Rescue-App</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/private">Dashboard</NavLink></li>
          </ul>
          <div className="publicPanels">
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/signup" component={CreateAccountForm}/>
            <Route path="/private" component={DashboardContainer}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
