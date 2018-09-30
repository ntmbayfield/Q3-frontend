import PropTypes from 'prop-types'
import { HashRouter, Router, Route, Link, NavLink } from "react-router-dom";
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Jumbotron from './Jumbotron.js';
import HeaderWithImage from './HeaderWithImage.js';
import ImageForHeader from './ManWithDogInMall.png'
import K911Logo from './k911-logog-tall.png';
import TinyDogWithEar2Phone from './tiny-dog-with-ear-2-phone.png';
import KelpieWithPhoneInMouth from './KelpieWithPhoneInMouth.png';
import ManWithDog from './man-with-dog.png';



const HomepageLayout = () => (
  <div>
    <Segment vertical>
      <HeaderWithImage />

      <Grid container stackable verticalAlign='middle'>

        <Grid.Row>

          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', marginTop: '5px' }}>
              What is k9-1-1?
            </Header>
            <p className="headerPara">
              k9-1-1 allows a service dog to be able to place an automated call or text message to 9-1-1 (or the emergency contact person specified by the user) with their owners name, location and medical conditions.  By pairing an IoT device with an app running on a users cell phone, we are able to bridge the communication barrier that nomally exists between man and mans best friend.  A service dog can now transmit not only the exact GPS location  for assistance to be dispatched to but also information about their handlers medical conditions, medications and allergies that it is critical to get into the hands of first responders.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              How It Works
            </Header>
            <p className="headerPara">
              k9-1-1 is able to accomplish all of this through the use of the SensorTile from STMicroelectronics, a leader in the fields of IoT and sensor technology. Part of what makes the SensorTile unique is its tiny size and ability to recognize gesture.  Thus, when a service dog performs a specified series of movements like rolling over twice, the SensorTile is able to recognize that gesture being performed and trigger an alert message to be dispatched through an app running on the users cell phone.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image src={K911Logo} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <div className="homeQuoteContainer">
              <Image src={TinyDogWithEar2Phone} className="tinyDog"/>
            </div>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "This is a total game-changer for me!"
              </Header>
              <p style={{ fontSize: '1.33em' }}>Eleanor, has a seizure alert dog</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>Nan</b> Chief Fun Of   Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <div className="homeQuoteContainer">
              <Image src={KelpieWithPhoneInMouth} className="tinyDog"/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </Segment>

  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            The Story Behind The App
          </Header>
          <p className="headerPara">
            The idea for k9-1-1 was inspired by a friend of mine who has epilepsy and has a seizure alert dog.  About 70% of the time, he is able to let her know that a seizure is imminent, giving her time to try to get to a safe place or get into a safe position. When she is coming out of the postical phase following a seizure, he tries to minimize her confusion while providing comfort and keeping her safe. There is even a special button that was installed inside her apartment which summons help and unlocks the front door if he pushes it with his nose.
          </p>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Out & About
          </Header>
          <p className="headerPara">
            But what happens if she has a seizure while the two of them are walking home from the grocery store? And there is no button that he can push to get help for her?
          </p>
          <Header as='h3' style={{ fontSize: '2em' }}>
            k9-1-1 offers a solution
          </Header>
          <p className="headerPara">
           k9-1-1 was created in the hopes of offering a solution to exactly that problem.  Our goal is to empower service dogs to be able to request assistance for his or her handler when a medical emergency occurs, regardless of whether they are in or out of the house; to provide first responders with pertinent details about the handlers medical history so that they can render the appropriate treatment; 
          </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Image src={ManWithDog}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>About Me</List.Item>
                <List.Item as='a'>Contact Me</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Resume</List.Item>
                <List.Item as='a'>LinkedIn</List.Item>
                <List.Item as='a'>Github</List.Item>
                <List.Item as='a'>Recent Projects</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={7}>
              <Header as='h4' inverted>
                k9-1-1
              </Header>
              <p>
                A Capstone project created by Nyiema Bayfield
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)
export default HomepageLayout
