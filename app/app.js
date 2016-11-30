// Framework and routing
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components for routing
import Main from './components/main';
import Secondary from './components/secondary';

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}/>
		<Route path="/secondary" component={Secondary}/>
	</Router>,
	document.getElementById('app')
);
