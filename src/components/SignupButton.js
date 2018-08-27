import React from 'react'
import { Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

const SignupButton = () =>
  <Button
    className="ui large fluid button"
    role="button"
  ><Link to="/signup">
    New to us? Sign up here!
    </Link>
  </Button>

export default SignupButton
