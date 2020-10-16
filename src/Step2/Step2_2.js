import React from "react";
import Steps from "components/Steps";
import StackHeader from "components/StackHeader";
import BackBtn from "components/BackBtn";
import AnserBtn from "components/AnserBtn";
import { icRest, checkBig, icCirArrow } from "components/ImgUtils";
import HorizontalBar from "../components/HorizontalBar";

export default function Step2_2() {
  return (
    <>
      <StackHeader />
      <div className="bothSpace pt10">
        <div className="mb55 stack-content">
          <Steps steps={4} activeStep={4} />
        </div>

        <div className="mb52">
          <div className="mb31 tc">
            <img src={checkBig} alt="" style={{ width: "120px" }} />
          </div>
          <div className="tc">
            <div className="tc">
              <h5 className="fontAvenirBold">
                STEP 1<br />
              </h5>
              <h5 className="weight500">
                난이도 평가{" "}
                <span className="step-underline weight400">Done!</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="shadow-box pa30 mb37">
          <div className="mb21">
            <p className="big-font tc fontAvenirMedium">60%</p>
          </div>

          <div className="mb30">
            <HorizontalBar percent={60} />
          </div>

          <h5 className="line-h26 weight300 small">
            학습자님께 <span className="color-primary">도전적인 콘텐츠</span>{" "}
            군요! <br />
            <br />
            독해 가능 정도가 <span className="color-primary">80%</span> 정도인
            경우 학습 효율이 가장 좋습니다. <br />
            <br />
            <div className="d-flex x-eq y-center">
              <div className="">
                <span className="color-primary">다른 콘텐츠</span>를 추천
                받으시려면 오른쪽 버튼을 눌러주세요.
              </div>
              <button className="ml30">
                <img src={icCirArrow} alt="" style={{ width: "30px" }} />
              </button>
            </div>
          </h5>
        </div>

        <div className="pl30 mb20">
          <div className="rest-icon mb15">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="mb20">
            <h5 className="weight300 line-h26 small">
              결정하셨나요? <br />
              그럼 이제 화살표 버튼을 눌러
              <br />
              단어 리뷰를 시작합니다.
            </h5>
          </div>
        </div>

        <div className="mb10">
          <BackBtn btnTxt="STEP 2 - 단어리뷰" />
        </div>

        <div className="mb20">
          <AnserBtn btnTxt={"학습 요약"} active />
        </div>
      </div>
    </>
  );
}
