import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { rightArr } from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";

export default function Setting(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29 mb40">
        <h3 className="weight500">설정</h3>
      </div>

      <div className="setting-wrap">
        <div className="setting-con">
          <div className="setting-title">설정</div>
          <div className="setting-row">
            <div className="txt">내 정보 설정</div>
            <div className="arr">
              <img src={rightArr} alt="" style={{ width: "10px" }} />
            </div>
          </div>
        </div>

        <div className="setting-con">
          <div className="setting-row">
            <div className="txt">내 정보 설정</div>
            <div className="arr">
              <img src={rightArr} alt="" style={{ width: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
