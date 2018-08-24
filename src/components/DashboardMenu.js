import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ServAnimDetails from './ServAnimDetails.js'
import ServAnimDiv from './ServAnimDiv.js'
import UserDiv from './UserDiv.js'
import EditUserInfo from './EditUserInfo.js'

export default class DashboardMenu extends Component {
  state = {
    activeTab: 'user info',
    userInfo: {}
  }

  handleTabClick = (e, { name }) => this.setState({ activeTab: name })

  render() {
    const { activeTab } = this.state

    return (
      <Menu fluid vertical tabular>
        <Menu.Item
          name='user info'
          active={activeTab=== 'user info'}
          onClick={this.handleTabClick}
        />
        <Menu.Item
          name='service animal'
          active={activeTab === 'service animal'}
          onClick={this.handleTabClick}
        />
        <Menu.Item
          name='medical info'
          active={activeTab === 'medical info'}
          onClick={this.handleTabClick}
        />
        <Menu.Item
          name='account settings'
          active={activeTab === 'account settings'}
          onClick={this.handleTabClick}
        />
      </Menu>
    )
  }
}
