import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import MedicalDetails from './MedicalDetails.js'
import EditMedicalInfo from './EditMedicalInfo.js'


const MedicalDiv = ({medicalInfo}) => (
  <Grid columns={2} relaxed>
    <Grid.Column>
      <h4>Your Medical Info:</h4>
      <MedicalDetails medicalInfo={medicalInfo}/>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <h4>Edit Your Medical Info:</h4>
      <EditMedicalInfo medicalInfo={this.medicalInfo}/>
    </Grid.Column>
  </Grid>
)

export default MedicalDiv;
