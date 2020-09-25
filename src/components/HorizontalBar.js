import React from 'react';

export default function HorizontalBar(props) {
	const { percent } = props;

	return (
		<div className="hor-bar-con">
			<div className="inner-bar-percent" style={{ width: `${percent}%` }} />
		</div>
	);
}
