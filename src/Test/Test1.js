import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import { icRest } from 'components/ImgUtils';

export default function Test1() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={3} activeStep={1} />
        </div>

        <div className="d-flex mb10">
          <h2 className="small step-underline mr5 weight500">STEP</h2>
          <h2 className="weight500">3</h2>
        </div>
        <div className="mb30">
          <h5 className="weight500">테스트</h5>
        </div>
        <div className="">
          <div className="rest-icon mb20">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="mb30">
            <h6 className="line-h26">
              마지막 스텝인 테스트를 총점 80점 이상 통과 하시면 학습 사이클
              하나를 완료 할 수 있습니다.
              <br />
              <br />
              <span className="weight500">원문 보기</span>와{' '}
              <span className="weight500">단어 리뷰</span>를 충분히 하셨나요?
              <br />
              <br />
              그럼, 편한 자세로 앉아서 다음 버튼을 눌러 테스트를 시작해 주세요.
            </h6>
          </div>
        </div>
      </div>

      <div className="pos-bottom middle">
        <BackBtn btnTxt="다음" />
      </div>
    </div>
  );
}
