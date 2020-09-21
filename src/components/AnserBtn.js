import React from "react";

export default function AnserBtn(props) {
  const { active, btnTxt, click } = props;
  return (
    <div
      className={active ? "btn-con anser active" : "btn-con anser "}
      onClick={() => click()}
    >
      <div className="btn-font">{btnTxt}</div>
    </div>
  );
}
