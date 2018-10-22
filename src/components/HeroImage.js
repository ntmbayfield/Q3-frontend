import React from 'react';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.mainText}</h1>
        <p>{this.props.subText}</p>
        <PrimaryButton buttonText='Learn more'/>
      </div>
    )
  }
}

class PrimaryButton extends React.Component {
  render() {
    return (
      <div>
         <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
        </div>
    )
  }
}


export default Jumbotron;
