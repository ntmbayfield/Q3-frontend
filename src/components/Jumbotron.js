import React from 'react';
import HeroImage from './HeroImage.js';
import { Jumbotron, Container } from 'reactstrap';
import { Image } from 'semantic-ui-react'

const Example = (props) => {
  return (
      <Jumbotron fluid className="heroclass">
        <Container fluid>
          <img src='https://imgur.com/a/UfR3ZvV' class='ui fluid image' />
          <h1 className="display-3">k9-1-1</h1>
          <p className="lead">An innovative application of IoT technology</p>
        </Container>
      </Jumbotron>
    );
  };

export default Example;
