import React from 'react';
import { base3, ic_read, fullImage } from 'components/ImgUtils';
import StackHeaderWhite from 'components/StackHeaderWhite';
import BackBtn from 'components/BackBtn';

export default function Study() {
  return (
    <div className="h-100vh">
      <StackHeaderWhite rightItem={'selector'} isAbsol />
      <div className="study-wrap">
        <div className="study-img">
          <img src={fullImage} alt="" />
          <div className="pos-bottom">
            <div className="top-icon-list">
              <div className="top-icon h7">Global</div>
              <div className="top-icon h7">Lv.30</div>
            </div>
            <h4 className="inner-content color-white weight500 ">
              At least 50 people burned to death in a bus collision in Ghana
            </h4>
          </div>
        </div>

        <div className="pos-bottom middle">
          <div className="d-flex x-eq y-center mb21 pl25 pr25">
            <div className="tc">
              <h5 className="middle weight500 mb2">27개</h5>
              <div className="h7 color-gray opacity50">학습 단어 수</div>
            </div>
            <div className="tc">
              <h5 className="middle weight500 mb2">22문장</h5>
              <div className="h7 color-gray opacity50">문장 수</div>
            </div>
            <div className="tc">
              <h5 className="middle weight500 mb2">84%</h5>
              <div className="h7 color-gray opacity50">레벨 커버량</div>
            </div>
          </div>
          <div className="d-flex">
            <BackBtn btnTxt="학습하기" />
            <div className="ml10">
              <button
                onClick={() => console.log('1')}
                className="read-icon"
                style={{ backgroundImage: `URL(${ic_read})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
