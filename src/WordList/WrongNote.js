import React from 'react';
import { blackX } from 'components/ImgUtils';

export default function WrongNote() {
	return (
		<>
			<div className="only-x-header">
				<div className="header-x">
					<img src={blackX} alt="" style={{ width: '16px', height: '16px' }} />
				</div>
			</div>
			<div className="mt29 mb20 title-container bothSpace">
				<h3 className="weight500">오답 리뷰</h3>
				<div className="smallFont color-primary weight500">27개</div>
			</div>

			<div className="bothSpace mb30">
				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">parent</h5>
						<div className="h7 color-gray">parent</div>
					</div>
					<div className="h7 color-gray">부모</div>
				</div>

				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">obscure</h5>
						<div className="h7 color-gray">əbˈskjʊr</div>
					</div>
					<div className="h7 color-gray tr">
						이해하기 힘든
						<br />
						모호한
					</div>
				</div>

				<div className="wrong-note-row direction-column">
					<div className="mb10">
						<div className="h7 weight500">
							Accessories Here you can find the best computer accessory for your laptop, monitor,
							printer, scanner, speaker, projector, hardware and more. laptop accessory compaq
							laptop battery .
						</div>
					</div>
					<div className="h7 color-gray self-y-start d-flex">
						정답 : <span className="del-txt gray mr5">gunman</span> assailants
					</div>
				</div>

				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">obscure</h5>
						<div className="h7 color-gray">əbˈskjʊr</div>
					</div>
					<div className="h7 color-gray tr">
						이해하기 힘든
						<br />
						모호한
					</div>
				</div>

				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">obscure</h5>
						<div className="h7 color-gray">əbˈskjʊr</div>
					</div>
					<div className="h7 color-gray tr">
						이해하기 힘든
						<br />
						모호한
					</div>
				</div>

				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">obscure</h5>
						<div className="h7 color-gray">əbˈskjʊr</div>
					</div>
					<div className="h7 color-gray tr">
						이해하기 힘든
						<br />
						모호한
					</div>
				</div>

				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">obscure</h5>
						<div className="h7 color-gray">əbˈskjʊr</div>
					</div>
					<div className="h7 color-gray tr">
						이해하기 힘든
						<br />
						모호한
					</div>
				</div>

				<div className="wrong-note-row">
					<div className="">
						<h5 className="weight500">obscure</h5>
						<div className="h7 color-gray">əbˈskjʊr</div>
					</div>
					<div className="h7 color-gray tr">
						이해하기 힘든
						<br />
						모호한
					</div>
				</div>
			</div>
		</>
	);
}
