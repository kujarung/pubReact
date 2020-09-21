import React from "react";
import BackBtn from "components/BackBtn";
import CircleProgress from "components/CircleProgress";

export default function PretestResult() {
  const getOption = () => {};

  return (
    <div className="">
      <div className="empty-header"></div>
      <div className="bothSpace pt21">
        <div className=" mb25">
          <h2 className="small fontAvenirBold">Result</h2>
        </div>
        <div>
          <h6 className="weight100 line-h26">
            닉네임님은 <span className="weight500">42%</span>의 콘텐츠을 읽을 수
            있어요.
            <br />약 <span className="weight500">123만개</span>의 콘텐츠를
            학습해보세요!
          </h6>
        </div>

        <div className="pos-rel">
          <div className="mb30 mt30">
            <CircleProgress />
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

        <div className="tr mb18">
          <p className="primary-underline color-primary h7">먼저 둘러보기</p>
        </div>
        <div className="text-box">
          <h6 className="weight100 line-h26">
            <span className="weight500">닉네임</span>님에 대해 알려주시면{" "}
            <span className="weight500">딱 맞는 콘텐츠</span>를 <br />
            찾아볼게요. <br />
            닉네임님의 <span className="weight500">응답</span>을 선택해 주세요!
          </h6>
        </div>

        <div className="pos-bottom">
          <BackBtn btnTxt="설문조사 하기" />
        </div>
      </div>
    </div>
  );
}
