import React from "react";
import HorizList from "components/HorizList";
import BackBtn from "components/BackBtn";
import {
  icRest,
  tempback1,
  tempbak2,
  tempbak1,
  blackX
} from "components/ImgUtils";

export default function LastRecommend() {
  const horzList = [
    {
      id: 112,
      imgPath: tempbak2,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…"
    },
    {
      id: 2321,
      imgPath: tempbak1,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…"
    },
    {
      id: 3,
      imgPath: tempback1,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…"
    }
  ];
  return (
    <>
      <div className="only-x-header">
        <button className="header-x">
          <img src={blackX} alt="" style={{ width: "16px", height: "16px" }} />
        </button>
      </div>
      <div className="bothSpace mt29 mb27">
        <h3 className="weight500">이런 컨텐츠는 어떠세요?</h3>
      </div>

      {<HorizList horzList={horzList} />}

      <div className="bothSpace">
        <div className="rest-icon mb11">
          <img src={icRest} alt="ic-rest" />
        </div>
        <h6 className="weight100 line-h26">
          혹시 마음에 들지 않으세요?
          <br />
          그렇다면 <span className="weight500">홈 화면</span>에서
          <br />더 많은 콘텐츠를 <span className="weight500">탐색</span>할 수
          있습니다. <br />
          <br />
        </h6>
        <div className="mb14">
          <BackBtn btnTxt="홈으로" />
        </div>
      </div>
    </>
  );
}
