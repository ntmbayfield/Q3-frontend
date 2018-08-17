import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import ServAnimDetails from './ServAnimDetails.js'
import EditServAnimInfo from './EditServAnimInfo.js'
import ColumnHeader from './ColumnHeader.js'

const ServAnimDiv = ({servAnimInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <ColumnHeader />
      <ServAnimDetails servAnimInfo={servAnimInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <ColumnHeader />
      <EditServAnimInfo servAnimInfo={this.servAnimInfo}/>
    </Grid.Column>
  </Grid>
)

export default ServAnimDiv;
