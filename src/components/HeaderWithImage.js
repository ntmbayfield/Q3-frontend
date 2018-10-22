import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import ImageForHeader from "./ManWithDogInMall.png"

const HeaderWithImage = ({ImageForHeader}) => {
  return (
    <div>
      <header className="w3-container w3-center heroHeader fluid">
        <h1 className="w3-margin w3-jumbo heroH">k9-1-1</h1>
        <p className="w3-xlarge heroP">an innovative application of iot technology</p>
        <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top"><Link to="/signup">Get Started</Link></button>
      </header>
    </div>
  )
}

export default HeaderWithImage;
