import React from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import MixBtnGrup from 'components/MixBtnGrup';
import DotSeletor from 'components/DotSeletor';

export default function Step3_4() {
  const dotList = [
    {
      title: '다른 예문 보기',
      active: false,
    },
    {
      title: '구글 번역 (새창)',
      active: true,
    },
    {
      title: '파파고 번역 (새창)',
      active: false,
    },
  ];
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt10">
        <div className="mb30">
          <Steps steps={3} activeStep={1} />
        </div>

        <div className="step-card">
          <div className="scroll-wrap">
            <div className="mb12 d-flex">
              <h6 className="weight500">
                According to the research firm Frost & Sullivan, the estimated
                size of the North American{' '}
                <span className="inner-empty gray">estimated</span> used test
                and measurement equipment market was $446.4 million in 2004. and
                measurement equipment market was $446.4 million in 2004. and
                measurement equipment market was $446.4 million in 2004. and
                measurement equipment market was $446.4 million in 2004. and
                measurement equipment market was $446.4 million in 2004. and
                measurement equipment market was $446.4 million in 2004.
              </h6>

              <div className="ml8">
                <button className="sound-icon" />
              </div>
            </div>

            <div className="">
              <div className="d-flex y-center">
                <div className="voca-type-btn mr3">noun</div>
                <h6 className="color-gray">/ˈper.ənt/</h6>
              </div>
              <div className="">
                <h6 className="weight500">부모</h6>
              </div>
            </div>

            <div className="pos-bottom d-flex y-center x-eq">
              <h6 className="color-gray">1 of 27</h6>
              <div className="">
                <DotSeletor dotList={dotList} />
              </div>
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
