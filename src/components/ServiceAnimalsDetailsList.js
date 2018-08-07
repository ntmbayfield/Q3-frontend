import React from 'react'
import { List } from 'semantic-ui-react'

const ServiceAnimalsDetailsList = () => (
  <List as='ul' className="servAnimDetailsList">
    <List.Item as='li'>Name:</List.Item>
    <List.Item as='li'>Age:</List.Item>
    <List.Item as='li'>Breed:</List.Item>
    <List.Item as='li'>Trained to:</List.Item>
    <List.Item as='li'>Alert Method:</List.Item>
  </List>
)

export default ServiceAnimalsDetailsList
