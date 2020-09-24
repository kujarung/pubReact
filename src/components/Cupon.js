import React from "react";
import { nocupon } from "components/ImgUtils";

export default function Cupon(props) {
  const { noCupon, locked } = props;
  return (
    <div className="horiz-item cupon">
      <div className="horiz-inner">
        <div className="horiz-top">
          <div className="cupon-img">
            <img src={`${nocupon}`} alt="" />
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
