import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import ServiceAnimalsDetailsList from './ServiceAnimalsDetailsList.js'
import CRUDServAnimInfoList from './CRUDServAnimInfoList.js'

const ServiceAnimalsDiv = () => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <ServiceAnimalsDetailsList />
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <CRUDServAnimInfoList />
    </Grid.Column>
  </Grid>
)

export default ServiceAnimalsDiv;
