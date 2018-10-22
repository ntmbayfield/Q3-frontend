import React from 'react'
import { List, Input, Button } from 'semantic-ui-react'

const UserDetails = ({userInfo, phoneNumberUpdate}) => {
  let currentPhoneListed;

  let changeUserProvidedContactNumber = (e) => {
    // this.setState({phoneNum: })
    console.log('Button route hit');
  }


  let phoneNumberUpdate2 = () => {
    // state = currentPhoneListed
  }

  return (
    <List as='ul' className="userDetails">
      <List.Item as='li'>
        Name: {userInfo.name}
      </List.Item>
      <List.Item as='li'>
        Email Address: {userInfo.email}
      </List.Item>
      <List.Item as='li'>
        Name of Emergency Contact: {userInfo.emergency_contact_name}
      </List.Item>
      <List.Item as='li'>
        Emergency Contact Phone Number: {userInfo.to}
      </List.Item>
      <List.Item as ='li'>
        <Input placeholder id='enter-a-phone-number' onChange={(e) => phoneNumberUpdate2(e)}/>
      </List.Item>
      <List.Item as='li'>
        <button type='submit' className='ui button' role='button' value='Submit!' onClick={(e) => changeUserProvidedContactNumber(e)}>
          Submit!
        </button>
      </List.Item>
    </List>
  )
}




//handleTabClick = (e, { name }) => this.setState({ activeTab: name })



export default UserDetails;
