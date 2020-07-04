import React from 'react';

class ShowData extends React.Component {
	render() {
		return <SearchBar />;
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

export default ShowData;
