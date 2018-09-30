import React from 'react'
import { List } from 'semantic-ui-react'

const ServAnimDetails = ({servAnimInfo}) => (
  <List as='ul' className="servAnimDetails">
    <List.Item as='li'>Name:{servAnimInfo.name}</List.Item>
    <List.Item as='li'>Age:{servAnimInfo.age}</List.Item>
    <List.Item as='li'>Breed:{servAnimInfo.breed}</List.Item>
  </List>
)

export default ServAnimDetails
