import React, { Component } from 'react';
import Router from 'react-router';
import ReactDom from 'react-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader.js';
import DashboardDiv from './DashboardDiv.js';
{
  //import DashboardMenu from './DashboardMenu.js';
}

export default class DashboardContainer extends React.Component {
  render() {


    {
      //const activeTab = this.state.activeTab;
      // var s = this.state;
      // var content;
      //
      // if(s.activeTab === 'account settings') {
      //   content = AccountDiv({ accountInfo: s.accountInfo });
      // }
      // else if(s.activeTab === 'service animal') {
      //   content = ServAnimDiv({ servAnimInfo: s.servAnimInfo });
      // }
      // else if(s.activeTab === 'medical info') {
      //   content = MedicalDiv({ medicalInfo: s.medicalInfo });
      // }
      // else {
      //   content = UserDiv({userInfo: s.userInfo});
      // }
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
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <DashboardDiv />
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
