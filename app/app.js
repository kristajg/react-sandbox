// Framework and routing
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Include styles

// Import components for routing
import Main from './components/main';
import Secondary from './components/secondary';

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}/>
		<Route path="/secondary" component={Secondary}/>
	</Router>,
	document.getElementById('app')
);
