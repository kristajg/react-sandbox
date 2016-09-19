import React, { Component } from 'react';
import Navigation from './navigation';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          Welcome to the Sandbox     
        </div>      
      </div>
    );
  }
}
