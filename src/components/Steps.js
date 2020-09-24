import React from 'react';

export default function Steps(props) {
	const { steps, activeStep } = props;
	const forArray = Array.from({ length: steps }, () => 0);
	return (
		<div className="step-wrap">
			{forArray.map((_, index) => (
				<div className={index + 1 == activeStep ? 'step active' : 'step'} />
			))}
		</div>
	);
}
