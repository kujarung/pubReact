import React from "react";
import BackBtn from "components/BackBtn";
import CircleProgress from "components/CircleProgress";
import { icRest } from "components/ImgUtils";

export default function PretestResult() {
  const innerHeight = window.innerHeight;
  return (
    <div className="">
      <div className="empty-header"></div>
      <div className="bothSpace pt21 flex-item-con">
        <div>
          <div className="mb5">
            <h2 className="small fontAvenirBold">Result</h2>
          </div>
          <div className="mb15">
            <h6 className="weight100 line-h26">
              닉네임님은 <span className="weight500">42%</span>의 콘텐츠을 읽을
              수 있어요.
              <br />약 <span className="weight500">123만개</span>의 콘텐츠를
              학습해보세요!
            </h6>
          </div>
        </div>

        <div className="grahp-con pos-rel flex1">
          <div className="mb14">
            <CircleProgress
              width={innerHeight > 668 ? 230 : innerHeight > 650 ? 180 : 150}
              percent={"42"}
            />
          </div>
          <div className="circle-label-con">
            <div className="circle-label">
              <div className="label-txt mb4">
                42<span className="per">%</span>
              </div>
              <div className="desc">약 123만개 콘텐츠</div>
            </div>
          </div>
        </div>

        <div>
          <div className="tr mb15">
            <p className="primary-underline color-primary h7">그냥 둘러보기</p>
          </div>
          <div className="text-box">
            <div className="rest-icon mb11">
              <img src={icRest} alt="ic-rest" />
            </div>
            <h6 className="weight100 line-h26">
              <span className="weight500">닉네임</span>님에 대해 알려주시면{" "}
              <span className="weight500">딱 맞는 콘텐츠</span>를 <br />
              찾아볼게요. <br />
              닉네임님의 <span className="weight500">응답</span>을 선택해
              주세요!
            </h6>
          </div>
        </div>

        <div className="pos-bottom">
          <BackBtn btnTxt="설문조사 하기" />
        </div>
      </div>
    </div>
  );
}
