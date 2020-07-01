import React from 'react';

const DataBlock = (props) => {
	const { new: newStat, total: totalStat } = props;

	return (
		<div className="data-container">
			<h3>
				New
				<span>{new Intl.NumberFormat().format(newStat)}</span>
			</h3>
			<h3>
				Total
				<span>{new Intl.NumberFormat().format(totalStat)}</span>
			</h3>
		</div>
	);
};

export default DataBlock;
