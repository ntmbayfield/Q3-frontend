import React from 'react'
import { List } from 'semantic-ui-react'

const EditUserInfo = ({userInfo}) => (
    <List as='ul' className="cul">
      <List.Item as='li'>
        Change Your Name
      </List.Item>
      <List.Item as='li'>
        Change Your Email Address
      </List.Item>
      <List.Item as='li'>
        Change Your Password
      </List.Item>
    </List>
  )

export default EditUserInfo;
