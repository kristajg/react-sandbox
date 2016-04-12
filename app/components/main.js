import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        Welcome to the React Sandbox!
        <ul>
        	<li><Link to='/'>Main</Link></li>
        	<li><Link to='/secondary'>Secondary</Link></li>
        </ul>
      </div>
    );
  }
}
