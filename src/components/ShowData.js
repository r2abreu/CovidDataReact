import React from 'react';
import axios from 'axios';

class ShowData extends React.Component {
	state = { data: {} };

	async componentDidMount() {
		const response = await axios.get('https://api.covid19api.com/summary');
		this.setState({ data: response.data.Global });
	}

	render() {
		return (
			<div>
				<SearchBar />
				<DataTable data={this.state.data} />
			</div>
		);
	}
}

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<h1>Global Summary</h1>
				<label>Search by Country</label>
				<input type="text" placeholder="United Kingdom" />
			</div>
		);
	}
}

class DataTable extends React.Component {
	render() {
		const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered } = this.props.data;
		// const formatedData = { ...this.props.data };
		// for (let key in formatedData) {
		// 	const format = { ...formatedData, key: new Intl.NumberFormat().format(formatedData[key]) };
		// 	console.log(format);
		// }

		// console.log(format);
		return (
			<div>
				<table>
					<thead>Global Data</thead>
					<tbody>
						<tr>
							<th />
							<td>Cases</td>
							<td>Deaths</td>
							<td>Recoveries</td>
						</tr>
						<tr>
							<th scope="col">New</th>
							<td>{NewConfirmed}</td>
							<td>{NewDeaths}</td>
							<td>{NewRecovered}</td>
						</tr>
						<tr>
							<th scope="col">Total</th>
							<td>{TotalConfirmed}</td>
							<td>{TotalDeaths}</td>
							<td>{TotalRecovered}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default ShowData;
