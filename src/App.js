import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CyrusPage from './js/components/CyrusPage'; //
import VaughnPage from './js/components/VaughnPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={CyrusPage}>
					Cyrus
				</Route>
				<Route path="/Vaughn" component={VaughnPage}>
					{' '}
					Vaughn
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
