import React from 'react';
import ReactDOM from 'react-dom';


 const DashboardDiv = ({props}) => (
   <Grid columns={2} relaxed>
     <Grid.Column>
       <ActiveTab props={props}/>
     </Grid.Column>
     <Divider vertical></Divider>
     <Grid.Column>
       <EditActiveTab props={this.props}/>
     </Grid.Column>
   </Grid>
 )

export default DashboardDiv;
