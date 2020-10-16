import React from "react";
import Steps from "components/Steps";
import StackHeader from "components/StackHeader";
import MixBtnGrup from "components/MixBtnGrup";
import DotSeletor from "components/DotSeletor";

export default function Step3_2() {
  const dotList = [
    {
      title: "다른 예문 보기",
      active: false
    },
    {
      title: "구글 번역 (새창)",
      active: true
    },
    {
      title: "파파고 번역 (새창)",
      active: false
    }
  ];

  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace pt10">
        <div className="mb30 stack-content">
          <Steps steps={3} activeStep={2} />
        </div>

        <div className="step-card width-icon">
          <div className="scroll-wrap">
            <div className="d-flex x-eq mb20">
              <div className="word-content-container">
                <h2 className="small fontAvenirBold word-break-all">
                  parentparentparentparentparentparentparentparentparent
                </h2>
              </div>

              <div className="sound-icon-con">
                <button className="sound-icon absol" />
              </div>
            </div>
            <div className="d-flex y-center">
              <div className="voca-type-btn mr3">noun</div>
              <h6 className="color-gray">/ˈper.ənt/</h6>
            </div>
            <div className="">
              <h6 className="weight500">부모</h6>
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
