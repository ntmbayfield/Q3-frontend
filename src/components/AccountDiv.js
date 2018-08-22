import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import AccountDetails from './AccountDetails.js'
import EditAccountInfo from './EditAccountInfo.js'

const AccountDiv = ({accountInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <h4>Your Account Information:</h4>
      <AccountDetails accountInfo={accountInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <h4>Edit Your Account Info:</h4>
      <EditAccountInfo userInfo={this.accountInfo}/>
    </Grid.Column>
  </Grid>
)

export default AccountDiv;
