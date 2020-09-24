import React, { useState } from "react";
import { dot } from "components/ImgUtils";

export default function DotSelector() {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <>
      <div className="dot-wrap">
        <div className="dot-con" onClick={() => setShowDesc(!showDesc)}>
          <img src={dot} alt="" />
        </div>
        <div className={showDesc ? "dot-desc-con active" : "dot-desc-con"}>
          <div className="dot-font active">
            <p>다른 예문 보기</p>
          </div>
          <div className="dot-font">
            <p>구글 번역 (새창)</p>
          </div>
          <div className="dot-font">
            <p>파파고 번역 (새창)</p>
          </div>
        </div>
      </div>
    </>
  );
}
