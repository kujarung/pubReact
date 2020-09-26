import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import MixBtnGrup from 'components/MixBtnGrup';
import DotSeletor from 'components/DotSeletor';

export default function Step3_2() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={3} activeStep={2} />
        </div>

        <div className="step-card">
          <div className="d-flex x-eq mb20">
            <h2 className="small">parent</h2>
            <div className="sound-icon"></div>
          </div>
          <div className="d-flex y-center">
            <div className="voca-type-btn mr3">noun</div>
            <h6 className="colr-gray">/ˈper.ənt/</h6>
          </div>
          <div className="">
            <h6 className="weight500">부모</h6>
          </div>

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
  );
}
