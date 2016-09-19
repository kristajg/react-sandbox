import React, { Component } from 'react';
import Navigation from './navigation';

export default class Secondary extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          Here's a secondary component      
        </div>      
      </div>
    );
  }
}
