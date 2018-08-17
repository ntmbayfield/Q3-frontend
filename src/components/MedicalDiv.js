import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import MedicalDetails from './MedicalDetails.js'
import EditMedicalInfo from './EditMedicalInfo.js'
import ColumnHeader from './ColumnHeader.js'

const MedicalDiv = ({medicalInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <ColumnHeader />
      <MedicalDetails medicalInfo={medicalInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <ColumnHeader />
      <EditMedicalInfo medicalInfo={this.medicalInfo}/>
    </Grid.Column>
  </Grid>
)

export default MedicalDiv;
