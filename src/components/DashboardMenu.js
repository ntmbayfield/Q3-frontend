import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ServAnimDetails from './ServAnimDetails.js'
import ServAnimDiv from './ServAnimDiv.js'
import UserDiv from './UserDiv.js'
import EditUserInfo from './EditUserInfo.js'

export default class MenuTabularOnLeft extends Component {
  state = {
            activeItem: 'user info',
            userInfo: {}
          }

  //eventually this will be for the current user who is logged in
  componentDidMount() {
    fetch('http://localhost:3911/users/2')
      .then(response => response.json())
      .then(data => {
        console.log("got data: ", data)
        this.setState({userInfo: data[0] })
      });
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (

      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='user info'
              active={activeItem === 'user info'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='service animal'
              active={activeItem === 'service animal'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='medical info'
              active={activeItem === 'medical info'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='account settings'
              active={activeItem === 'account settings'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <UserDiv userInfo={this.state.userInfo}/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
