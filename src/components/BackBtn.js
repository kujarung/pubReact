import React from 'react';

export default function BackBtn(props) {
	const { btnTxt, isGray, isSmall } = props;
	return (
		<div className={('btn-con main-back', isGray ? 'gray-back' : '', isSmall ? 'small' : '')}>
			<div className="btn-font">{btnTxt}</div>
		</div>
	);
}
