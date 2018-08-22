import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader.js';
import DashboardMenu from './DashboardMenu.js';
// import DashboardDiv from './DashboardDiv.js';
import AccountDiv from './AccountDiv.js';
import MedicalDiv from './MedicalDiv.js';
import ServAnimDiv from './ServAnimDiv.js';
import UserDiv from './UserDiv.js';

export default class DashboardContainer extends Component {
  state = {
    activeTab: 'user info',
    userInfo: {},
    servAnimInfo: {},
    medicalInfo: {},
    accountInfo: {}
  }

  changeMenuTab = ({ name }) => {
    this.state.setState({ activeTab: name })
  }





  render() {
    var s = this.state;
    var content;

    if(s.activeTab === 'account settings') {
      content = AccountDiv({ accountInfo: s.accountInfo });
    }
    else if(s.activeTab === 'service animal') {
      content = ServAnimDiv({ servAnimInfo: s.servAnimInfo });
    }
    else if(s.activeTab === 'medical info') {
      content = MedicalDiv({ medicalInfo: s.medicalInfo });
    }
    else {
      content = { UserDiv };
    }

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
              <DashboardHeader />
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        {
        <Grid.Row>
          <Grid.Column width={4}>
            <DashboardMenu />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <UserDiv />
          </Grid.Column>
        </Grid.Row>
      }
      </Grid>
    )
  }
}
