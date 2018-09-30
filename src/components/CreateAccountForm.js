import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class CreateAccountForm extends Component {
  render() {
    return (
      <div className='create-account-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Signup For An Account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Name'
                  type="text"
                  required
                  autofocus
                />
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  type="email"
                  required
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  required
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Re-enter Password'
                  type='password'
                  required
                />
                <Form.Input
                  fluid
                  placeholder='Condition'
                  type='text'
                  required
                />
                <Form.Input
                  fluid
                  placeholder='Emergency Contact Number'
                  type='number'
                  required
                />

                <Button color='teal' fluid size='large'>
                  Create My Account!
                </Button>
              </Segment>
            </Form>
            <Message>
              <Button className="ui large fluid button" role="button">
                <Link to="/login">
                Already Have an Account? Login
                </Link>
              </Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateAccountForm;
