import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class MenuTabularOnLeft extends Component {
  state = { activeItem: 'user info' }

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
              active={activeItem === 'service animal'} onClick={this.handleItemClick}
            />
            <Menu.Item
              name='medical Info'
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
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
