import React from 'react';

// Greet the user

const App = () => {
	return (
		<div>
			<Hero />
			<Sidebar />
			<ShowDataButton />
		</div>
	);
};

const Hero = () => {
	return (
		<div>
			<div>
				<h1>Coronavirus COVID-19 Data</h1>
			</div>
		</div>
	);
};

const Sidebar = () => {
	return (
		<div>
			<h2>Metadata</h2>
			<ul>
				<li>Author</li>
				<li>API</li>
				<li>Source</li>
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

export default App;
