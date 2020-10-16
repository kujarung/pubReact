import React from 'react';
import StackHeaderWhite from 'components/StackHeaderWhite';
import HaxTxt from 'components/HaxTxt';
import { hand, grayCheck, icChecked } from 'components/ImgUtils';
import BackBtn from 'components/BackBtn';

export default function Summary() {
	return (
		<>
			<StackHeaderWhite isAbsol rightItem="info" />
			<div className="mb40">
				<div className="study-wrap he360">
					<div className="study-img he360">
						<img src={hand} alt="hand" />
						<div className="pos-bottom">
							<div className="top-icon-list">
								<div className="top-icon h7">Global</div>
								<div className="top-icon h7">Lv.30</div>
							</div>
							<h4 className="inner-content color-white weight500 ">
								At least 50 people burned to death in a bus collision in Ghana
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div className="bothSpace">
				<div className="mb40">
					<div className="mb25">
						<h5 className="weight500">학습 뱃지</h5>
					</div>
					<div className="d-flex y-center x-eq pl20 pr20">
						<div className="">
							<HaxTxt txt={'1회차'} />
						</div>

						<div className="">
							<HaxTxt txt={'2회차'} />
						</div>

						<div className="">
							<HaxTxt txt={'3회차'} isGray />
						</div>
					</div>
				</div>

				<div className="shadow-box pt40 pb30 mb25">
					<div className="mb24 bothSpace">
						<h6 className="weight400">리뷰 2회차 (2/3)</h6>
					</div>
					<div>
						<div className="d-flex x-eq link-line y-center">
							<div className="d-flex y-center z-10">
								<div className="mr8">
									<img src={grayCheck} style={{ width: '24px', height: '24px;' }} />
								</div>
								<div className="">
									<h6 className="weight400">기사 읽기</h6>
									<div className="h7 color-gray">sample text sample text</div>
								</div>
							</div>
							<div className="tag-item no-margin">
								<p className="tag-txt color-primary">읽기</p>
							</div>
						</div>

						<div className="d-flex x-eq link-line y-center">
							<div className="d-flex y-center z-10">
								<div className="mr8" style={{ backgroundColor: 'white' }}>
									<img src={icChecked} alt="" style={{ width: '24px', height: '24px;' }} />
								</div>
								<div className="">
									<h6 className="weight400">단어, 원문 리뷰</h6>
									<div className="h7 color-gray">sample text sample text</div>
								</div>
							</div>
							<div className="tag-item no-margin">
								<p className="tag-txt color-primary">리뷰</p>
							</div>
						</div>

						<div className="d-flex x-eq link-line y-center active">
							<div className="d-flex y-center z-10">
								<div className="mr8">
									<div className="gray-circle-num">3</div>
								</div>
								<div className="">
									<h6 className="weight400">단어, 원문 테스트</h6>
									<div className="h7 color-gray">sample text sample text</div>
								</div>
							</div>
							<div className="tag-item no-margin full">
								<p className="tag-txt">start</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mb20">
					<BackBtn btnTxt="학습시작하기" />
				</div>
			</div>
		</>
	);
}
