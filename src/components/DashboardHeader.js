import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const DashboardHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>My Account</Header.Content>
    </Header>
  </div>
)

export default DashboardHeader;
