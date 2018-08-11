import React from 'react'
import { List } from 'semantic-ui-react'

const UserDetailsList = ({userInfo}) => (
  <List as='ul' className="user_detail_list">
    <List.Item as='li'>Name: {userInfo.name}</List.Item>
    <List.Item as='li'>Email Address: {userInfo.email}</List.Item>
    <List.Item as='li'>Condition: {userInfo.condition}</List.Item>
    <List.Item as='li'>Emergency Contact:  {userInfo.emergency_contact}</List.Item>
  </List>
)

export default UserDetailsList;
