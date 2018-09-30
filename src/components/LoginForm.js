import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import SignupButton from './SignupButton.js';



class LoginForm extends Component {
  constructor() {
      super();
      this.state = {
        email: '',
        password: '',
      }
  }

  onChange = (e) => {
    /*  Because we named the inputs to match their corresponding values in state, it's
      super easy to update the state    */
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}
        </style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
             Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  name='email'
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  type='email'
                  required
                  autofocus
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  required
                  onChange={this.onChange}
                />
                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>

            <Message>
              <Link to="/createAccountForm">
                <SignupButton />
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm
