// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DataBlock from './DataBlock';
import ApiMetadata from './ApiMetadata';
import Chart from './Chart';
import './styles.css';

// Create a react component

// This is a Functional component

class App extends React.Component {
	state = { data: {}, meta: {} };

	async componentDidMount() {
		const dataResponse = await axios.get('https://api.covid19api.com/summary');
		this.setState({ data: dataResponse.data.Global });
		console.log('data:', this.state.data);

		const metaResponse = await axios.get('https://api.covid19api.com/stats');
		this.setState({ meta: metaResponse.data });
		console.log('meta:', this.state.meta);
	}

	render() {
		return (
			<div>
				<div className="api-metadata">
					<ApiMetadata update={this.state.meta} />
				</div>
				<div className="data-block">
					<div className="cases data-container">
						<div>
							<h2>Cases</h2>
							<DataBlock new={this.state.data.NewConfirmed} total={this.state.data.TotalConfirmed} />
						</div>
					</div>
					<div className="deaths data-container">
						<div>
							<h2>Deaths</h2>
							<DataBlock new={this.state.data.NewDeaths} total={this.state.data.TotalDeaths} />
						</div>
					</div>
					<div className="recoveries data-container">
						<div>
							<h2>Recoveries</h2>
							<DataBlock new={this.state.data.NewRecovered} total={this.state.data.TotalRecovered} />
						</div>
					</div>
				</div>
				<div className="chart">
					<Chart />
				</div>
			</div>
		);
	}
}

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.getElementById('root'));
