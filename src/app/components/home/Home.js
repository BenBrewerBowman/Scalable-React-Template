import React from 'react';
import logo from './logo.svg';
import './Home.css';


const Home = () => (
  <div className="Intro">
    <header className="Intro-header">
      <img src={logo} className="Intro-logo" alt="logo" />
      <h1 className="Intro-title">Welcome to Scalable Create React App</h1>
    </header>
    <p className="Intro-info">
      To get started, create a folder under components and call it from the header, body, or footer components.
    </p>
  </div>
);

export default Home;
