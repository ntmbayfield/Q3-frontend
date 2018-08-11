import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import UserDetailsList from './UserDetailsList.js'
import EditUserInfo from './EditUserInfo.js'
import ColumnHeader from './ColumnHeader.js'

const UserDiv = ({userInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <ColumnHeader />
      <UserDetailsList userInfo={userInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <ColumnHeader />
      <EditUserInfo userInfo={this.userInfo}/>
    </Grid.Column>
  </Grid>
)

export default UserDiv;
