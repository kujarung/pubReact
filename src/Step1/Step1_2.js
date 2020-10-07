import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import { icRest, checkBig } from 'components/ImgUtils';
import BarWidthLineChart from '../components/BarWidthLineChart';
import BottomSheet from '../components/BottomSheet';

export default function Step1_1() {
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
          <Steps steps={4} activeStep={2} />
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
        <div className="mt52 mb45">
          <div className="big-font fontAvenirMedium tc">
            03:24<span class="time-desc">초</span>
          </div>
        </div>

        <div className="mb34">
          <BarWidthLineChart
            reciveLineInfo={reciveLineInfo}
            reciveCheckInfo={reciveCheckInfo}
            reciveBarList={reciveBarList}
            reciveLegend={reciveLegend}
          />
        </div>
        <div className="mb30">
          <BackBtn btnTxt="다음" />
        </div>
      </div>
      <BottomSheet />
    </>
  );
}
