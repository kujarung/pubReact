import React from 'react';

export default function BackBtn(props) {
	const { btnTxt, isGray, isSmall } = props;
	return (
		<div
			className={`btn-con main-back`}
			style={{
				backgroundColor: isGray ? 'rgba(119, 119, 119, 0.5)' : '--primary',
				width: isSmall ? '100px' : '100%',
			}}
		>
			<div className="btn-font">{btnTxt}</div>
		</div>
	);
}
