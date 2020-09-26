import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import MixBtnGrup from 'components/MixBtnGrup';
import DotSeletor from 'components/DotSeletor';

export default function Step3_4() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={3} activeStep={1} />
        </div>

        <div className="step-card">
          <div className="mb12 d-flex">
            <h6 className="weight500">
              According to the research firm Frost & Sullivan, the estimated
              size of the North American{' '}
              <span className="inner-empty gray">estimated</span> used test and
              measurement equipment market was $446.4 million in 2004.
            </h6>

            <div className="ml8">
              <div className="sound-icon"></div>
            </div>
          </div>

          <div className="d-flex y-center">
            <div className="voca-type-btn mr3">noun</div>
            <h6 className="colr-gray">/ˈper.ənt/</h6>
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
