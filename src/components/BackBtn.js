import React from "react";

export default function BackBtn(props) {
  const { btnTxt } = props;
  return (
    <div className="btn-con main-back">
      <div className="btn-font">{btnTxt}</div>
    </div>
  );
}
