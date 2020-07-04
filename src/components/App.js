import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ShowData from './ShowData';

// Greet the user

class App extends React.Component {
	async componentDidMount() {
		const response = await axios.get('https://api.covid19api.com/summary');
		console.log(response);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/data" component={ShowData} />
				</Switch>
			</div>
		);
	}
}

export default App;
