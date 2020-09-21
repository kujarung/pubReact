import React from "react";
import { back } from "components/ImgUtils";

export default function Drawer(props) {
  const { isActive, closeDrawer } = props;
  return (
    <div className={isActive ? "drawer active" : "drawer"}>
      <div className="drawe-inner">
        <div className="back-btn-con tr" onClick={() => closeDrawer()}>
          <img src={back} alt="" />
        </div>
        <div className="bothSpace">
          <div className="bottom-small-line long mb32">
            <h5 className="weight500">오늘의 콘텐츠</h5>
          </div>

          <ul className="menu-list">
            <li>홈</li>
            <li>마이 페이지</li>
            <li>리딩 퍼센트 사용법</li>
            <li>설정</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
