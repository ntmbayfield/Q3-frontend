//var dotenv = require('dotenv').config();
import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
//import ButtonExampleButton from './components/buttonExample.js';
import './App.css';
import EditUserInfo from './components/EditUserInfo.js';
import UserDetails from './components/UserDetails.js';
import UserDiv from './components/UserDiv.js';
import LoginForm from './components/LoginForm.js';
import DashboardHeader from './components/DashboardHeader.js';
import DashboardMenu from './components/DashboardMenu.js';
import CreateAccountForm from './components/CreateAccountForm.js';



class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rex-2-The-Rescue</h1>
        </header>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
                <LoginForm />
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
                <CreateAccountForm />
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
                <DashboardHeader />
                <DashboardMenu />
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
