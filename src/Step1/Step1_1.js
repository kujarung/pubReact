import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import { icRest } from 'components/ImgUtils';

export default function Step1_1() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={4} activeStep={1} />
        </div>

        <div className="d-flex mb10">
          <h2 className="small step-underline mr5 weight500">STEP</h2>
          <h2 className="weight500">1</h2>
        </div>
        <div className="">
          <h5 className="weight500">원문 읽기</h5>
        </div>
      </div>

      <div className="pos-bottom middle">
        <div className="rest-icon mb20">
          <img src={icRest} alt="ic-rest" />
        </div>
        <div className="mb30">
          <h6 className="line-h26">
            <span className="weight500">학습을 시작합니다!</span>
            <br />
            <br />
            글을 읽을 때는 원문의 전체 흐름을 파악 하는데 집중해서 읽어보세요.
            <br />
            모르거나 이해되지 않는 문장이 있어더라도 <br />
            그냥 끝까지 읽어나가는 것이 가장 중요해요!
            <br />
            <br />
            그럼, 최대한 편한 자세로 앉아서 다음 버튼을 눌러
            <br />
            시작해 주세요.
          </h6>
        </div>
        <BackBtn btnTxt="다음" />
      </div>
    </div>
  );
}
