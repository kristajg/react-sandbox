import React from 'react';
import Navigation from './navigation';

export default class Main extends React.Component {
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
