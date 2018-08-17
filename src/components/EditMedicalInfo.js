import React from 'react'
import { List } from 'semantic-ui-react'

const EditMedicalInfo = ({medicalInfo}) => (
  <List as='ul' className="editMedicalInfo">
    <List.Item as='li'>Add a New Medical Condition</List.Item>
    <List.Item as='li'>Add a New Medication</List.Item>
    <List.Item as='li'>Delete a New Medication</List.Item>
    <List.Item as='li'>Add a New Allergy</List.Item>
    <List.Item as='li'>Update Your Primary Care Physician</List.Item>
    <List.Item as='li'>Update Contact Number for Your Physician<List.Item>
  </List>
)

export default EditMedicalInfo
