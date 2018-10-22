import React from 'react'
import { List } from 'semantic-ui-react'

const MedicalDetails = ({medicalInfo}) => (
  <List as='ul' className="medDetails">
    <List.Item as='li'>
      Medical Condition:{medicalInfo.condition}
    </List.Item>
    <List.Item as='li'>Medications:{medicalInfo.medications}</List.Item>
    <List.Item as='li'>Allergies:{medicalInfo.allergies}</List.Item>
    <List.Item as='li'>Primary Care Physician:{medicalInfo.doctorName}</List.Item>
    <List.Item as='li'>Physician Phone Number:{medicalInfo.doctorPhone}</List.Item>
  </List>
)

export default MedicalDetails
