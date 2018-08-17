import React from 'react'
import { List } from 'semantic-ui-react'

const AccountDetails = ({accountInfo}) => (
  <List as='ul' className="accountDetails">
    <List.Item as='li'>FullName: {accountInfo.name}</List.Item>
    <List.Item as='li'>Email Address: {accountInfo.email}</List.Item>
    <List.Item as='li'>Password: {accountInfo.password}</List.Item>
    <List.Item as='li'>Subscription Type: {accountInfo.subscriptionType}<List.Item>
    <List.Item as='li'>Member Since: {accountInfo.dateJoined}</List.Item>
  </List>
)

export default AccountDetails;
