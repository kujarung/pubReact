import React, { useState } from "react";
import Steps from "components/Steps";
import StackHeader from "components/StackHeader";
import BackBtn from "components/BackBtn";
import AnserBtn from "components/AnserBtn";
import { icRest } from "components/ImgUtils";

export default function Step3_1() {
  const [anser, setAnser] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false
  });

  const clickSelectItem = id => {
    Object.keys(anser).map(item =>
      item === id ? (anser[item] = true) : (anser[item] = false)
    );
    console.log(anser);
    setAnser({ ...anser });
  };
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace pt10">
        <div className="mb30 stack-content">
          <Steps steps={3} activeStep={1} />
        </div>

        <div className="d-flex mb10">
          <h2 className="small step-underline mr5 weight500">STEP</h2>
          <h2 className="weight500">2</h2>
        </div>
        <div className="mb30">
          <h5 className="weight500">단어 리뷰</h5>
        </div>

        <div className="rest-icon mb15">
          <img src={icRest} alt="ic-rest" />
        </div>
        <div className="mb30">
          <h5 className="weight300 line-h26 small">
            원문에서 27개의 단어 중에서 <br />꼭 필요한{" "}
            <span className="weight500">15개</span>의 필수 단어를 리뷰합니다.
            <br />
            <br />
            그럼 어떤 단어를 리뷰하시겠어요?
          </h5>
        </div>
      </div>

      <div className="pos-bottom small-no-absol">
        <div className="has-check mb20">
          <AnserBtn
            btnTxt={"모든 단어 리뷰하기"}
            active={anser["one"]}
            clickSelectItem={clickSelectItem}
            id={"one"}
          />
          <AnserBtn
            btnTxt={"미학습 단어만 리뷰하기"}
            active={anser["two"]}
            clickSelectItem={clickSelectItem}
            id={"two"}
          />
          <AnserBtn
            btnTxt={"필수 단어만 리뷰하기"}
            active={anser["three"]}
            clickSelectItem={clickSelectItem}
            id={"three"}
          />
        </div>
        <div className="mb12">
          <BackBtn btnTxt="다음" />
        </div>
        <div className="tc">
          <a href="#">
            <span class="primary-underline color-primary h7">단어장 보기</span>
          </a>
        </div>
      </div>
    </div>
  );
}
