import React from "react";
import { backBtn } from "components/ImgUtils";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function StackHeader() {
  const click = () => {};
  return (
    <div className="header">
      <Link to="/">
        <div className="icon-img-con arr">
          <img src={backBtn} alt="back-btn" />
        </div>
      </Link>
    </div>
  );
}
