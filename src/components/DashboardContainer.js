import React, { Component } from 'react';
import Router from 'react-router';
import ReactDom from 'react-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader.js';
import DashboardDiv from './DashboardDiv.js';

export default class DashboardContainer extends React.Component {
  render() {
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
