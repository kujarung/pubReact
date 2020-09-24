import React, { useEffect, useState } from 'react';

export default function BarchartWidthLine(props) {
	const [offsetInfo, setOffsetInfo] = useState({});
	const [lineCalcOk, setLineCalcOk] = useState(false);

	const legend = ['읽은 시간', '비슷한 사용자가 읽은 시간'];
	const barList = [
		{
			title: '1회차',
			disabled: false,
			percentList: [
				{ id: 1, percent: 10 },
				{ id: 2, percent: 80 },
			],
		},
		{
			title: '2회차',
			disabled: false,
			percentList: [
				{ id: 3, percent: 60 },
				{ id: 4, percent: 20 },
			],
		},
		{
			title: '3회차',
			disabled: true,
			percentList: [
				{ id: 5, percent: 60 },
				{ id: 6, percent: 20 },
			],
		},
	];

	const lineInfo = [
		{
			source: 2,
			target: 4,
		},
	];

	const checkInfo = [2, 4];

	// 화면 랜더링 후 좌표에 대한 위치를 구함
	useEffect(() => {
		const calcForOffsetId = barList.flatMap(val => val.percentList).map(item => item.id);
		const caclOffset = {};
		calcForOffsetId.forEach(offsetId => {
			const offsetInfo = document.getElementById(`bar-key-${offsetId}`);
			caclOffset[offsetId] = {
				x: offsetInfo.offsetLeft + offsetInfo.offsetWidth / 2,
				y: offsetInfo.offsetTop,
			};
		});
		setOffsetInfo(caclOffset);
		setLineCalcOk(true);
	}, []);

	return (
		<div className="multi-bar-wrap">
			<svg className="line-con">
				{/* line */}
				{lineCalcOk &&
					lineInfo.map(info => {
						const { source, target } = info;
						const x1 = offsetInfo[source].x;
						const y1 = offsetInfo[source].y;
						const x2 = offsetInfo[target].x;
						const y2 = offsetInfo[target].y;
						return (
							<>
								<line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" stroke="#1769ff" />
								<circle cx={x1} cy={y1} r="3" stroke="#1769ff" fill="white" />
								<circle cx={x2} cy={y2} r="3" stroke="#1769ff" fill="white" />
							</>
						);
					})}

				{/* checkbox */}
				{lineCalcOk &&
					checkInfo.map(checkId => {
						return (
							<g
								transform={`translate(${offsetInfo[checkId].x - 8},${offsetInfo[checkId].y - 26})`}
							>
								<path
									d="M6.03546 9.48717C5.43095 10.0917 4.45009 10.0917 3.84587 9.48717L0.453382 6.09469C-0.151127 5.49047 -0.151127 4.5096 0.453382 3.90539C1.0576 3.30088 2.03847 3.30088 2.64298 3.90539L4.66423 5.92635C4.81682 6.07864 5.06451 6.07864 5.21739 5.92635L10.6904 0.453382C11.2946 -0.151127 12.2754 -0.151127 12.88 0.453382C13.1702 0.743674 13.3333 1.13754 13.3333 1.54803C13.3333 1.95853 13.1702 2.35239 12.88 2.64268L6.03546 9.48717Z"
									transform="translate(1.3333334 3.3333335)"
									id="Path"
									fill="#2574FF"
									fill-rule="evenodd"
									stroke="none"
								/>
							</g>
						);
					})}
			</svg>
			<div className="legend-con">
				{legend.map(title => (
					<div class="legend-font">{title}</div>
				))}
			</div>
			{barList.map(item => {
				return (
					<div className="multi-bar-con" style={{ width: `calc(100% / ${barList.length}` }}>
						{item.percentList.map(bar => {
							return (
								<>
									<div
										id={`bar-key-${bar.id}`}
										className="inner-bar"
										style={
											item.disabled
												? {
														backgroundColor: '#f5f6fa',
														height: `calc(100% / 100 * ${bar.percent})`,
												  }
												: { height: `calc(100% / 100 * ${bar.percent})` }
										}
									/>
								</>
							);
						})}
						<div className={item.disabled ? 'multi-bar-title disabled' : 'multi-bar-title'}>
							{item.title}
						</div>
					</div>
				);
			})}
		</div>
	);
}
