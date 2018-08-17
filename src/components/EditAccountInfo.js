import React from 'react'
import { List } from 'semantic-ui-react'

const EditAccountInfo = ({accountInfo}) => (
  <List as='ul' className="editAccountInfo">
    <List.Item as='li'>Update Your Email Address</List.Item>
    <List.Item as='li'>Update Your Password</List.Item>
    <List.Item as='li'>Update Your Subscription Type</List.Item>
  </List>
)

export default EditAccountInfo
