import React from 'react';
import { blueArrRight, mix, blueArrLeft } from 'components/ImgUtils';

export default function MixBtnGrup() {
  return (
    <div className="d-flex">
      <div className="">
        <img src={blueArrRight} alt="" style={{ height: '58px' }} />
      </div>
      <div className="mix-btn-con d-flex xy-center">
        <div className="d-flex">
          <div className="mr14">
            <img src={mix} alt="" style={{ height: '24px' }} />
          </div>
          <h6 className="color-primary">카드 섞기</h6>
        </div>
      </div>
      <div className="">
        <img src={blueArrLeft} alt="" style={{ height: '58px' }} />
      </div>
    </div>
  );
}
