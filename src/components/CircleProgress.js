import React from 'react';

export default function CircleProgress(props) {
	const { width, percent, small } = props;
	const max = Math.ceil((Math.PI * 2 * (width - 20)) / 2);
	const circleFill = Math.ceil((max / 100) * percent);
	const { color, railColor } = props;
	return (
		<div className="tc">
			<svg className="circle-chart" width={width} height={width}>
				<defs>
					<filter id="inset-shadow">
						<feOffset dx="0" dy="1" />

						<feGaussianBlur stdDeviation="1" result="offset-blur" />

						<feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />

						<feFlood flood-color="black" flood-opacity="0.4" result="color" />

						<feComposite operator="in" in="color" in2="inverse" result="shadow" />

						<feComposite operator="over" in="shadow" in2="SourceGraphic" />
					</filter>
				</defs>

				<circle
					filter="url('#inset-shadow')"
					className="circle-chart__background"
					stroke={railColor ? railColor : '#F6F6F6'}
					strokeWidth={small ? '5' : '10'}
					fill="none"
					cx={width / 2}
					cy={width / 2}
					r={width / 2 - 10}
				/>
				<circle
					className="circle-chart__circle"
					stroke={color ? color : '#1769ff'}
					strokeWidth={small ? '3' : '8'}
					strokeDasharray={`${circleFill},${max}`}
					strokeLinecap="round"
					fill="none"
					cx={width / 2}
					cy={width / 2}
					r={width / 2 - 10}
				/>
			</svg>
		</div>
	);
}
