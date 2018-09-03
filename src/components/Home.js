import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import K911EvenHeight from '../k911-logo-even-height.png';
import ManWithDog from '../src/assets/man-with-dog.png';
import LadyWithDog from '../src/assets/lady-with-dog.png';
import GSBitingPhone from '../src/assets/gs-biting-phone.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the k9-1-1 App!</h2>
        <img src={K911EvenHeight} alt="k911-even-height-logo" id="evenheightlogo"/>
        <p>More than 500,000 Americans are assisted by service animals in the United States.  There are seizure dogs, allergy detection dogs, and diabetic alerts dogs; to name just a few of the more than 14 types of recognized service animals.  These faithful companions are trained to perform a wide variety of tasks for their handlers.
        <img src={ManWithDog} alt="man with dog" id="man-with-dog" />
        <img src={LadyWithDog} alt="woman with dog" id="lady-with-dog" />
        The k9-1-1 App and iOT device,  provide trained service animals with a way to be able to place an automated call to 911 with their handlers name, location and their medical condition.
        <img src={GSBitingPhone} alt="german shepard biting a cell phone" id="gs-biting=phone" />


      </div>
    )
  }
};

export default Home;
