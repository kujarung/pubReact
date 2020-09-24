import React from "react";
import { grayX } from "components/ImgUtils";

export default function SerchInput(props) {
  const { hasX } = props;
  return (
    <div className="search-input-con">
      <input type="text" />
      {hasX ? (
        <div className="input-right-x">
          {" "}
          <img src={grayX} alt="" style={{ width: "16px" }} />
        </div>
      ) : null}
    </div>
  );
}
