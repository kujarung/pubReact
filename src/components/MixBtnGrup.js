import React from "react";
import { mix } from "components/ImgUtils";

export default function MixBtnGrup() {
  return (
    <div className="d-flex">
      <div className="">
        <button className="blue-arr left" />
      </div>
      <button className="mix-btn-con d-flex xy-center">
        <div className="d-flex xy-center">
          <div className="mr14">
            <img src={mix} alt="" style={{ height: "24px" }} />
          </div>
          <h6 className="color-primary">카드 섞기</h6>
        </div>
      </button>
      <div className="">
        <button className="blue-arr right" />
      </div>
    </div>
  );
}
