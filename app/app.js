// Framework and routing
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

// Include styles
import Styles from './styles/main.less';

// Import components for routing
import Main from './components/main';
import Secondary from './components/secondary';

render(
	<Router>
		<Route path="/" component={Main}/>
		<Route path="/secondary" component={Secondary}/>
	</Router>,
	document.getElementById('app')
);
