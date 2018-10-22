import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactDOM from 'react-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';

import AccountDiv from './AccountDiv.js';
import MedicalDiv from './MedicalDiv.js';
import ServAnimDiv from './ServAnimDiv.js';
import UserDiv from './UserDiv.js';



class DashboardDiv extends Component {

  state = {
      isLoggedIn: true,
      activeTab: 'userInfo',
      userInfo: {},
      servAnimInfo: {},
      medicalInfo: {},
      accountInfo: {},
      phoneNum: {}
    }

  // state = {
  //   isLoggedIn: true,
  //   activeTab: 'user info',
  //   userInfo: {},
  //   servAnimInfo: {},
  //   medicalInfo: {},
  //   accountInfo: {}
  // }

  componentDidMount() {
      fetch('http://localhost:3911/users/2')
        .then(response => response.json())
        .then(data => {
          console.log("got data: ", data)
          this.setState({userInfo: data[0] })
        });
    }

  handleTabClick = (e, { name }) => this.setState({ activeTab: name });

  handlePhoneUpdate = (e) => {
      console.log('hit handlePhoneUpdate');
   this.setState({phoneNum: e.target.value});
  }

 render() {
   const { activeTab } = this.state

     return (
       <HashRouter>
         <div className="dashboardDiv">
            <Grid>
               <Grid.Row>
                 <Grid.Column width={4}>
                   <Menu fluid vertical tabular
                    className="menuTabs"
                    activeTab={activeTab}
                   >
                        <Menu.Item
                          active={activeTab=== 'user info'}
                          onClick={this.handleTabClick}
                        >
                          <NavLink exact to="/private/">
                            User Info
                          </NavLink>
                        </Menu.Item>

                        <Menu.Item
                          active={activeTab === 'service animal'}
                          onClick={this.handleTabClick}
                        >
                          <NavLink to="/private/servAnimPanel">
                            Service Animal
                          </NavLink>
                        </Menu.Item>

                        <Menu.Item
                          active={activeTab === 'medical info'}
                          onClick={this.handleTabClick}
                        >
                          <NavLink to="/private/medicalPanel">
                            Medical Info
                          </NavLink>
                        </Menu.Item>

                        <Menu.Item
                          active={activeTab === 'account settings'}
                          onClick={this.handleTabClick}
                        >
                          <NavLink to="/private/accountPanel">
                            Account Settings
                          </NavLink>
                        </Menu.Item>
                   </Menu>
               </Grid.Column>

               <Grid.Column stretched width={12}>
                 <div className="content">
                    <Route exact path="/private/" render={(props) => <UserDiv userInfo={this.state.userInfo} phoneNumberUpdate={this.handlePhoneUpdate}/> }/>
                    <Route path="/private/servAnimPanel" render={(props) => <ServAnimDiv servAnimInfo={this.state.servAnimInfo}/> }/>
                    <Route path="/private/medicalPanel" render={(props) => <MedicalDiv medicalInfo={this.state.medicalInfo}/> } />
                    <Route path="/private/accountPanel" render={(props) => <AccountDiv accountInfo={this.state.accountInfo}/> } />
                 </div>
               </Grid.Column>
             </Grid.Row>
           </Grid>
      </div>
    </HashRouter>
   );
 }
}
export default DashboardDiv
