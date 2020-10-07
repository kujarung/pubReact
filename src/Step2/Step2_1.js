import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import AnserBtn from 'components/AnserBtn';
import { icRest } from 'components/ImgUtils';

export default function Step2_1() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={4} activeStep={3} />
        </div>

        <div className="d-flex mb10">
          <h2 className="small step-underline mr5 weight500">STEP</h2>
          <h2 className="weight500">1</h2>
        </div>
        <div className="mb30">
          <h5 className="weight500">난이도 평가</h5>
        </div>

        <div className="rest-icon mb15">
          <img src={icRest} alt="ic-rest" />
        </div>
        <div className="mb30">
          <h5 className="weight300 line-h26 small">
            본문을 읽는데 총 <span className="weight500">3분 24초</span>가
            걸렸어요.
            <br />
            얼마나 잘 읽을 수 있으셨나요?
          </h5>
        </div>
      </div>

      <div className="pos-bottom small-no-absol">
        <div className="has-check mb20">
          <AnserBtn btnTxt={'거의 모르겠어요'} />
          <AnserBtn btnTxt={'반은 읽을 수 있었어요'} />
          <AnserBtn btnTxt={'조금 읽을 수 있었어요'} active />
          <AnserBtn btnTxt={'반 이상 읽을 수 있었어요'} />
          <AnserBtn btnTxt={'거의 읽을 수 있었어요'} />
        </div>
        <BackBtn btnTxt="다음" />
      </div>
    </div>
  );
}
