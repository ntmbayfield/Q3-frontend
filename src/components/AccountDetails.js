import React from 'react'
import { List } from 'semantic-ui-react'

const AccountDetails = ({accountInfo}) => (
  <List as='ul' className="accountDetails">
    <List.Item as='li'>Full Name: {accountInfo.name}</List.Item>
    <List.Item as='li'>Email Address: {accountInfo.email}</List.Item>
    <List.Item as='li'>Password: {accountInfo.password}</List.Item>
  </List>
)

export default AccountDetails;
