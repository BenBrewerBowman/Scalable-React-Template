import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Scalable-React-Template</h1>
        </header>
        <p className="App-intro">
          Don't worry about defining a new scalable project structure. Let
          Scalable-React-Template do that for you!
        </p>
      </div>
    );
  }
}

export default App;