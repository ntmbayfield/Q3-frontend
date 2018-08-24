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

        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Row>
            <Grid.Column>
        {// <Grid.Row>
          //   <Grid.Column width={4}></Grid.Column>
          //   <Grid.Column width={8}>
          //     <LoginForm />
          //   </Grid.Column>
          //   <Grid.Column width={4}></Grid.Column>
          // </Grid.Row>
          //
          // <Grid.Row>
          //   <Grid.Column width={4}></Grid.Column>
          //   <Grid.Column width={8}>
          //       <CreateAccountForm />
          //   </Grid.Column>
          //   <Grid.Column width={4}></Grid.Column>
          // </Grid.Row>
          //
          // <Grid.Row>
          //   <Grid.Column width={2}></Grid.Column>
          //   <Grid.Column width={12}>
          //     <DashboardContainer />
          //   </Grid.Column>
          //   <Grid.Column width={2}></Grid.Column>
          // </Grid.Row>
        }
                <Main />
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
