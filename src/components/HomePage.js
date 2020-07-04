import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<Sidebar />
				<ShowDataButton />
			</div>
		);
	}
}

const Hero = () => {
	return (
		<div>
			<div>
				<h1>Coronavirus COVID-19 Data</h1>
				<p>
					<Link to="/data">Link</Link>
				</p>
			</div>
		</div>
	);
};

const Sidebar = () => {
	return (
		<div>
			<h2>Metadata</h2>
			<ul>
				<li>Author: Arturo Abreu</li>
				<li>
					<a href="https://covid19api.com/">API</a>
				</li>
				<li>
					<a href="https://github.com/CSSEGISandData/COVID-19">Data Source</a>
				</li>
			</ul>
		</div>
	);
};

const ShowDataButton = () => {
	return (
		<div>
			<button>Show Data</button>
		</div>
	);
};

export default HomePage;
