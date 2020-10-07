import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import { icRest } from 'components/ImgUtils';
import CircleProgress from 'components/CircleProgress';

export default function LevelInfo(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29">
        <div className="level-info-con mb20">
          <h2 className="mb20 fontAvenirMedium">Level 20</h2>
          <div className="rest-icon mb10">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              레벨은 학습자님의 레벨이 아닌,
              <br />
              <span className="weight500">콘텐츠의 레벨을 의미</span>해요. 학습
              우선순위로 <br />
              콘텐츠 레벨을 나눴고 레벨부터 100레벨까지 있어요.
            </h6>
          </div>
        </div>
        <div className="level-info-con mb30">
          <div className="pos-rel mb20">
            <CircleProgress width="300" percent={42} />
            {/* 원형 차트 설명 */}
            <div className="circle-label-con wi100">
              <div className="circle-label">
                <div className="label-txt big mb4">
                  42<span className="per">%</span>
                </div>
                <div className="desc mb14">
                  현재 닉네임님은 전체 콘텐츠 중<br />약 20%를 읽을 수 있어요.
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="rest-icon mb10">
              <img src={icRest} alt="ic-rest" />
            </div>
            <div className="">
              <h6 className="weight100 line-h26">
                온라인 콘텐츠를 100%으로 볼 때, 학습자님이 <br />
                <span className="weight500">20%의 콘텐츠를 읽을 수 있음</span>을
                의미해요.
                <br />
                <br />
                예를 들자면, 1레벨까지의 콘텐츠를 읽을 수 있다는 의미는 약 15%의
                콘텐츠를 읽을 수 있다는 의미에요. <br />
                그러므로 20레벨까지의 콘텐츠를 읽을 수 있는 것과 20%의 콘텐츠를
                읽을 수 있다는 것은 다른 의미죠. <br />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
