import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import AnserBtn from 'components/AnserBtn';
import { checkBig } from 'components/ImgUtils';
import HorizontalBar from '../components/HorizontalBar';
import BarWidthLineChart from 'components/BarWidthLineChart';

export default function Step2_3() {
	return (
		<>
			<StackHeader />
			<div className="bothSpace mt10">
				<div className="mb55">
					<Steps steps={4} activeStep={4} />
				</div>

				<div className="mb52">
					<div className="mb31 tc">
						<img src={checkBig} alt="" style={{ width: '120px' }} />
					</div>
					<div className="tc">
						<h5 className="fontAvenirBold">
							STEP 1<br />
							난이도 평가 <span className="step-underline">Done!</span>
						</h5>
					</div>
				</div>

				<div className="shadow-box pa30 mb20">
					<div className="mb21">
						<p className="big-font tc fontAvenirMedium">60%</p>
					</div>

					<div className="mb30">
						<HorizontalBar percent={60} />
					</div>

					<h5 className="line-h26 weight300">
						축하합니다!
						<br />
						지난 번에 비해 <span className="weight500">소폭 상승</span> 하셨습니다!
					</h5>
				</div>

				<div className="mb44">
					<BarWidthLineChart />
				</div>

				<div className="mb10">
					<BackBtn btnTxt="STEP 2 - 단어리뷰" />
				</div>

				<div className="mb20">
					<AnserBtn btnTxt={'학습 요약'} active />
				</div>
			</div>
		</>
	);
}
