import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import UserDetails from './UserDetails.js'
import EditUserInfo from './EditUserInfo.js'
import ColumnHeader from './ColumnHeader.js'

function UserDiv({userInfo}) {
  return (
    <Grid columns={2} relaxed>
      <Grid.Column>
        <h4>User Info:</h4>
        <UserDetails userInfo={userInfo}/>
      </Grid.Column>
      <Divider vertical></Divider>
      <Grid.Column>
        <h4>Edit User Info:</h4>
        <EditUserInfo userInfo={userInfo}/>
      </Grid.Column>
    </Grid>
  )
}


export default UserDiv;