import React, { Component } from 'react';
import Header from '../header/header.component';
import Application from '../application/application.component';
import './prototype.css';

class Prototype extends Component {
  render() {
    return (
      <div className="prototype">
        <Header />
        <Application />
      </div>
    );
  }
}

export default Prototype;
