import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignupForm = () => (
  <Form className="Signup">
    <Form.Input label="Full Name" placeholder='Full Name' />
    <Form.Input label="Email Address" placeholder='Email Address' />
    <Form.Input label="Password" type="password" placeholder="Enter Password" />
    <Form.Input label="Verify Password" type="password" />
    <Form.Input label="Medical Condition" placeholder="Enter your medical condition" />
    <Form.Input label="Emergency Contact Number" placeholder="Enter An Emergency Contact Phone Number" />
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Create My Account!</Button>
  </Form>
)

export default SignupForm
