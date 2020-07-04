import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ShowData from './ShowData';

// Greet the user

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/" component={ShowData} />
				</Switch>
			</div>
		);
	}
}

export default App;
