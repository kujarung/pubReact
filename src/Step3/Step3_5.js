import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import AnserBtn from 'components/AnserBtn';
import { icRest, checkBig, ic_read } from 'components/ImgUtils';
import HorizontalBar from '../components/HorizontalBar';

export default function Step3_5() {
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
              STEP 2<br />
              단어리뷰 <span className="step-underline">Completed!</span>
            </h5>
          </div>
        </div>

        <div className="shadow-box pa30 mb37">
          <h5 className="line-h26 weight300">
            <span className="weight500">고생하셨습니다!</span> <br />
            <br />
            마지막 관문인 테스트가 남았네요! <br />
            <br />
            <span className="weight500">테스트하기 전에 복습하기</span>
            <br />
            <br />
            <div className="d-flex x-eq y-center">
              <div className="">
                <span className="color-primary">뒤로가기</span>를 눌러
                단어리뷰를 하거나{' '}
                <span className="color-primary">오른쪽 버튼</span>을 눌러 원문
                리뷰를 해보세요
              </div>
              <div className="ml30 self-y-end">
                <div
                  className="read-icon"
                  style={{ backgroundImage: `URL(${ic_read})` }}
                />
              </div>
            </div>
          </h5>
        </div>

        <div className="pl30 mb20">
          <div className="rest-icon mb15">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="mb20">
            <h5 className="weight400 line-h26 small">
              총점 <span className="color-primary">80점</span>이상 받으면 학습
              단계를
              <br />
              완료할 수 있습니다!
              <br />
              준비되셨나요?
            </h5>
          </div>
        </div>

        <div className="mb10">
          <BackBtn btnTxt="STEP 3 - 테스트" />
        </div>

        <div className="mb20">
          <AnserBtn btnTxt={'학습 요약'} active />
        </div>
      </div>
    </>
  );
}
