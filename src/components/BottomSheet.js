import React from 'react';
import HaxTxt from 'components/HaxTxt';
import { whiteX } from 'components/ImgUtils';

export default function BottomSheet() {
  return (
    <div className="bottom-sheet-con">
      <button className="pop-x-btn-con type2">
        <img src={whiteX} alt="" />
      </button>
      <div className="">
        <h5 className="color-white">축하합니다!</h5>
        <h6 className="color-white">"첫 원문 읽기" 도전에 성공했습니다!</h6>
      </div>

      <div className="">
        <HaxTxt txt={'2회차'} />
      </div>
    </div>
  );
}
