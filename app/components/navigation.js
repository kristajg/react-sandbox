import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top">
				<div className="container">
					<div className="collapse navbar-collapse" id="navbar">
		        <ul className="nav navbar-nav">
		        	<li><Link to='/'>Main</Link></li>
		        	<li><Link to='/secondary'>Secondary</Link></li>
		        </ul>						
					</div>
				</div>
			</nav>
		);
	}
};
