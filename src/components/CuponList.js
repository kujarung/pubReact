import React from 'react';

export default function CuponList(props) {
	const { noCupon, locked } = props;
	return (
		<div className="horiz-item cupon">
			<div className="horiz-inner">
				<div className="horiz-top">
					<div className="cupon-img">
						<img src={`${peopleBack}`} alt="" />
					</div>
					<div className=""></div>
				</div>
			</div>
		</div>
	);
}
