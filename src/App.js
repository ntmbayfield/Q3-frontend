import React, { Component } from 'react';
import ButtonExampleButton from './components/buttonExample.js';
import './App.css';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rex-2-The-Rescue</h1>
        </header>
        <LoginForm />
        <ButtonExampleButton />
      </div>
    );
  }
}

export default App;
