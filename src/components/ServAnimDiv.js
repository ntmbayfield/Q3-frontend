import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import ServAnimDetails from './ServAnimDetails.js'
import EditServAnimInfo from './EditServAnimInfo.js'


const ServAnimDiv = ({servAnimInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <h4>Service Animal Info:</h4>
      <ServAnimDetails servAnimInfo={servAnimInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <h4>Edit Service Animal Info:</h4>
      <EditServAnimInfo servAnimInfo={this.servAnimInfo}/>
    </Grid.Column>
  </Grid>
)

export default ServAnimDiv;
