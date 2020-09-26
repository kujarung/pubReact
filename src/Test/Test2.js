import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import AnserBtn from 'components/AnserBtn';
import { icRest } from 'components/ImgUtils';

export default function Test2() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={3} activeStep={2} />
        </div>

        <div className="d-flex mb21 x-eq y-center">
          <div className="d-flex">
            <h2 className="small step-underline mr5 fontAvenirBold">Q</h2>
            <h2 className="weight500 fontAvenirBold">1</h2>
          </div>
          <div className="self-y-start">
            <h6 className="color-gray">1 of 5</h6>
          </div>
        </div>

        <h5 className="weight500">
          Tidjani Ibrahim Katiella, governor of Tillaberi region, said the{' '}
          <span className="inner-empty long"></span> were riding motorbikes
          during the incidents on Saturday.
        </h5>
      </div>

      <div className="pos-bottom">
        <div className="has-check mb20">
          <AnserBtn btnTxt={'gunman'} />
          <AnserBtn btnTxt={'assailants'} />
          <AnserBtn btnTxt={'carjacked'} active />
          <AnserBtn btnTxt={'suspect'} />
          <AnserBtn btnTxt={'robbers'} />
        </div>
        <BackBtn btnTxt="다음" />
      </div>
    </div>
  );
}
