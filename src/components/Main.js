import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import LoginForm from "./LoginForm.js";
import CreateAccountForm from "./CreateAccountForm.js";
import DashboardContainer from "./DashboardContainer.js";
import SiteHeader from "./SiteHeader.js";
import Jumbotron from "./Jumbotron.js";
import FixedNavbar from './FixedNavbar.js';


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          < FixedNavbar />
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
