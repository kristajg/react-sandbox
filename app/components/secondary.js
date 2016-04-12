import React from 'react';
import {Link} from 'react-router';

export default class Secondary extends React.Component {
  render() {
    return (
      <div>
        Here's a secondary component
        <ul>
        	<li><Link to='/'>Main</Link></li>
        	<li><Link to='/secondary'>Secondary</Link></li>
        </ul>        
      </div>
    );
  }
}
