import React from 'react';
import ReactDOM from 'react-dom';
import ColumnHeader from './ColumnHeader.js'

 const DashboardDiv = ({props}) => (
   <Grid columns={2} relaxed>
     <Grid.Column>
       <ColumnHeader />
       <ActiveTab props={props}/>
     </Grid.Column>
     <Divider vertical></Divider>
     <Grid.Column>
       <ColumnHeader />
       <EditActiveTab props={this.props}/>
     </Grid.Column>
   </Grid>
 )

export default DashboardDiv;
