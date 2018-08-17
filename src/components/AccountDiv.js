import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import AccountDetails from './AccountDetails.js'
import EditAccountInfo from './EditAccountInfo.js'
import ColumnHeader from './ColumnHeader.js'

const AccountDiv = ({accountInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <ColumnHeader />
      <AccountDetails accountInfo={accountInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <ColumnHeader />
      <EditAccountInfo userInfo={this.accountInfo}/>
    </Grid.Column>
  </Grid>
)

export default AccountDiv;
