import React from "react";
import { backBtn } from "components/ImgUtils";
import { Link } from "react-router-dom";

export default function StackHeader(props) {
  const { rightItem } = props;
  return (
    <div className="header">
      <Link to="/">
        <div className="icon-img-con arr">
          <img src={backBtn} alt="back-btn" />
        </div>
      </Link>
      {rightItem === "info" ? (
        <div className=""></div>
      ) : rightItem === "selector" ? (
        <div className=""></div>
      ) : null}
    </div>
  );
}
