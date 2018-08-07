import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const CreateAccountForm = () => (
  <div className='create-account-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
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
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              type="email"
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Re-enter Password'
              type='password'
            />
            <Form.Input
              fluid
              placeholder='Condition'
            />
            <Form.Input
              fluid
              placeholder='Emergency Contact Number'
            />

            <Button color='teal' fluid size='large'>
              Create My Account!
            </Button>
          </Segment>
        </Form>
        <Message>
          <Button className="ui large fluid button" role="button">
            Already Have an Account? Login
          </Button>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default CreateAccountForm;
