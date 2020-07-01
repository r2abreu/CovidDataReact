import React from 'react';

const ApiMetadata = (props) => {
	return (
		<div>
			<p>Last Updated: {props.update.AllUpdated}</p>
			<p>
				Api Source: <a href="https://covid19api.com/">Covid-19 API</a>
			</p>
			<p>
				Data Source: <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a>
			</p>
		</div>
	);
};

export default ApiMetadata;
