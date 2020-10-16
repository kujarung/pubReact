import React from "react";
import BackBtn from "components/BackBtn";
import { icRest } from "components/ImgUtils";

export default function PretestIntro() {
  return (
    <>
      <div className="popup-wrap">
        <div className="inner-pop small static">
          <div className="pl10 pr10 title">
            <h4 className="small weight500">나의 첫번째 콘텐츠</h4>
          </div>

          <div className="pl10 pr10 content type2">
            <div className="rest-icon mb11">
              <img src={icRest} alt="ic-rest" />
            </div>
            <h6 className="weight100 line-h26">
              <span className="weight500">어떤 콘텐츠</span>로 시작하면
              좋을까요?
              <br />
              학습 효과가 좋고 <span className="weight500">관심사</span>와{" "}
              <span className="weight500">흥미</span>에 맞는 <br />
              콘텐츠가 좋을 것 같아요.
              <br />
              <br />
              편한 마음으로 <span className="weight500">퀴즈</span>를 풀어
              주세요!
            </h6>
          </div>

          <div className="continue-btn width-a">
            <div className="mb10">
              <BackBtn btnTxt="시작하기" />
            </div>
            <div className="tc">
              <a href="#">
                <p className="primary-underline color-primary h7">
                  그냥 둘러보기
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-100vh"></div>
    </>
  );
}
