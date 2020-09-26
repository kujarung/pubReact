import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import AnserBtn from 'components/AnserBtn';
import {
  icRest,
  checkBig,
  allRead,
  halfOverRead,
  halfRead,
  smallRead,
  noRead,
} from 'components/ImgUtils';
import HorizontalBar from '../components/HorizontalBar';
import BarWidthLineChart from '../components/BarWidthLineChart';

export default function Test3() {
  const reciveLineInfo = [];
  const reciveCheckInfo = [2];
  const reciveLegend = ['나의 예상', '테스트 결과'];
  const reciveBarList = [
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
      disabled: true,
      percentList: [
        { id: 3, percent: 60 },
        { id: 4, percent: 80 },
      ],
    },
    {
      title: '3회차',
      disabled: true,
      percentList: [
        { id: 5, percent: 60 },
        { id: 6, percent: 100 },
      ],
    },
  ];

  return (
    <>
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb55">
          <Steps steps={3} activeStep={3} />
        </div>

        <div className="mb52">
          <div className="mb31 tc">
            <img src={checkBig} alt="" style={{ width: '120px' }} />
          </div>
          <div className="tc">
            <h5 className="fontAvenirBold">
              STEP 3<br />
              테스트 <span className="step-underline">Completed!</span>
            </h5>
          </div>
        </div>

        <div className="shadow-box pa30 mb37">
          <div className="mb21">
            <p className="big-font tc fontAvenirMedium">
              95<span className="time-desc">점</span>
            </p>
          </div>

          <div className="mb30">
            <HorizontalBar percent={95} />
          </div>

          <h5 className="line-h26 small">
            축하합니다!
            <br />
            총점 95점으로 학습 사이클 하나를 <br />
            완료했습니다.
          </h5>
        </div>

        <div className="mb50">
          <h5 className="mb10 weight500">테스트 결과</h5>
          <BarWidthLineChart
            reciveLineInfo={reciveLineInfo}
            reciveCheckInfo={reciveCheckInfo}
            reciveBarList={reciveBarList}
            reciveLegend={reciveLegend}
          />
        </div>

        <div className="mb40">
          <h5 className="mb10 weight500">1회차</h5>
          <div className="d-flex">
            <div className="emigi-con">
              <div className="h7 color-gray mb11">나의 예상</div>
              <div className="mb18">
                <img src={allRead} alt="" style={{ width: '64px' }} />
              </div>
              <h6 className="weight500">
                거의 읽을 수<br />
                있었어요
              </h6>
            </div>
            <div className="emigi-con">
              <div className="h7 color-gray mb38">테스트점수</div>
              <p className="big-font tc fontAvenirMedium">
                95<span className="time-desc">점</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb10">
          <BackBtn btnTxt="오답 리뷰" />
        </div>

        <div className="mb20">
          <AnserBtn btnTxt={'학습 요약'} active />
        </div>
      </div>
    </>
  );
}
