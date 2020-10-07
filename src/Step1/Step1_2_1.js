import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import { icRest, checkBig } from 'components/ImgUtils';
import BarWidthLineChart from '../components/BarWidthLineChart';
import BottomSheet from '../components/BottomSheet';

export default function Step1_1() {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb55">
          <Steps steps={4} activeStep={1} />
        </div>

        <div className="">
          <div className="mb31 tc">
            <img src={checkBig} alt="" style={{ width: '120px' }} />
          </div>
          <div className="tc">
            <h5 className="fontAvenirBold">
              STEP 1<br />
            </h5>
            <h5 className="weight500">
              원문 읽기{' '}
              <span className="step-underline weight400">Finished!</span>
            </h5>
          </div>
        </div>
        <div className="mt52 mb38">
          <div className="big-font fontAvenirMedium tc">
            03:24<span class="time-desc">초</span>
          </div>
        </div>

        <div className="mb23">
          <div className="rest-icon mb10">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight300 line-h26">
              <span className="weight500">축하드려요!</span>
              <br />
              지난 번에 비해 읽는 시간이 짧아졌습니다!
            </h6>
          </div>
        </div>
        <div className="mb34">
          <BarWidthLineChart />
        </div>

        <BackBtn btnTxt="다음" />
      </div>
    </>
  );
}
