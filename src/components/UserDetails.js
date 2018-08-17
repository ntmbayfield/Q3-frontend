import React from 'react'
import { List } from 'semantic-ui-react'

const UserDetails = ({userInfo}) => (
  <List as='ul' className="userDetails">
    <List.Item as='li'>Name: {userInfo.name}</List.Item>
    <List.Item as='li'>Email Address: {userInfo.email}</List.Item>
    <List.Item as='li'>Name of Emergency Contact: {userInfo.emergencyContactName}</List.Item>
    <List.Item as='li'>Relationship of Emergency Contact: {userInfo.emergencyContactRelationship}</List.Item>
    <List.Item as='li'>Emergency Contact Phone Number: {userInfo.emergencyContactNumber}</List.Item>
  </List>
)

export default UserDetails;
