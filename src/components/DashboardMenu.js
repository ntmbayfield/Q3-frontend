import React, { Component } from 'react'
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ServAnimDetails from './ServAnimDetails.js'
import ServAnimDiv from './ServAnimDiv.js'
import UserDiv from './UserDiv.js'
import EditUserInfo from './EditUserInfo.js'

export default class DashboardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    activeTab: 'user info',
                    userInfo: {},
                    servAnimInfo: {},
                    medicalInfo: {},
                    accountInfo: {}
                  };

    // This binding is necessary to make `this` work in the callback
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick = (e, { name }) => this.setState({ activeTab: name })

  render() {
    const { activeTab } = this.state

    return (
      <Menu fluid vertical tabular>
        <Link to="/userPanel">
          <Menu.Item
            name='user info'
            active={activeTab === 'user info'}
            onClick={this.handleTabClick}
          />
        </Link>
        <Link to="servAnimPanel">
          <Menu.Item
            name='service animal'
            active={activeTab === 'service animal'}
            onClick={this.handleTabClick}
            />
          </Link>
        <Link to="medicalPanel">
          <Menu.Item
            name='medical info'
            active={activeTab === 'medical info'}
            onClick={this.handleTabClick}
          />
        </Link>
        <Link to="accountPanel">
          <Menu.Item
            name='account settings'
            active={activeTab === 'account settings'}
            onClick={this.handleTabClick}
          />
        <Link>
      </Menu>
    )
  }
}
