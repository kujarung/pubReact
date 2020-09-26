import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import MixBtnGrup from 'components/MixBtnGrup';
import DotSeletor from 'components/DotSeletor';

export default function Step3_3() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={3} activeStep={1} />
        </div>

        <div className="step-card">
          <h6 className="weight500">
            According to the research firm Frost & Sullivan, the estimated size
            of the North American used test and measurement equipment market was
            $446.4 million in 2004.
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
  );
}
