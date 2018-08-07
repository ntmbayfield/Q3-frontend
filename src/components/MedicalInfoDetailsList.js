import React from 'react'
import { List } from 'semantic-ui-react'

const MedicalInfoDetailsList = () => (
  <List as='ul' className="medInfoDetailsList">
    <List.Item as='li'>Medical Condition:</List.Item>
    <List.Item as='li'>Medications:</List.Item>
    <List.Item as='li'>Allergies:</List.Item>
    <List.Item as='li'>Primary Care Physician:</List.Item>
    <List.Item as='li'>Physician Phone Number:</List.Item>
  </List>
)

export default MedicalInfoDetailsList
