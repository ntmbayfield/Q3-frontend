import React from 'react'
import { List } from 'semantic-ui-react'

const CRUDServAnimInfoList = () => (
  <List as='ul' className="csal">
    <List.Item as='li'>Add A New Service Animal</List.Item>
    <List.Item as='li'>Remove A Service Animal</List.Item>
    <List.Item as='li'>Change Info About Your Service Animal</List.Item>
    <List.Item as='li'>Add an Alert Method:</List.Item>
  </List>
)

export default CRUDServAnimInfoList;
