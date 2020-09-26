import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import MixBtnGrup from 'components/MixBtnGrup';
import DotSeletor from 'components/DotSeletor';
import { blackX } from 'components/ImgUtils';

export default function Step3_3_pop1() {
  return (
    <>
      <div className="popup-wrap">
        <div className="inner-pop">
          <div className="pop-x-btn-con tpye2">
            <img
              src={blackX}
              alt=""
              style={{ width: '16px', height: '16px' }}
            />
          </div>
          <div className="mb38 pl10 pr10">
            <h4 className="small weight500">카드섞기</h4>
          </div>
          <div className="mb38 pl10 pr10">
            <h6 className="weight500">단어 카드를 섞을까요?</h6>
          </div>

          <div className="d-flex x-end">
            <BackBtn btnTxt="확인" isSmall />
          </div>
        </div>
      </div>

      <div className="h-100vh">
        <StackHeader />
        <div className="bothSpace mt10">
          <div className="mb30">
            <Steps steps={3} activeStep={1} />
          </div>

          <div className="step-card">
            <h6 className="weight500">
              According to the research firm Frost & Sullivan, the estimated
              size of the North American used test and measurement equipment
              market was $446.4 million in 2004.
            </h6>

            <div className="pos-bottom d-flex y-center x-eq">
              <h6 className="color-gray">1 of 27</h6>
              <div className="">
                <DotSeletor />
              </div>
            </div>
          </div>
        </div>

        <div className="pos-bottom middle">
          <MixBtnGrup />
        </div>
      </div>
    </>
  );
}
