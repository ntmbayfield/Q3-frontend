//var dotenv = require('dotenv').config();
import React, { Component } from 'react';
import Router from 'react-router';
import {
  DefaultRoute,
  RouteHandler,
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
//import ButtonExampleButton from './components/buttonExample.js';
import './App.css';

import Main from "./components/Main.js"

class App extends Component {
  render () {
    return (
      <div className="app">

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Main />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
