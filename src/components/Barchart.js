import React from "react";
import { clock } from "components/ImgUtils";

export default function Barchart(props) {
  const { percentList, title } = props;
  const titleList = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <div className="bar-wrap">
      <div className="bar-title">
        <div className="mr5">
          <img src={clock} alt="" />
        </div>

        <h5 className="small">
          {title} <span> min</span>
        </h5>
      </div>
      <div className="bar-content">
        {percentList.map((percent, index) => {
          return (
            <div>
              <div className="bar-container mb10">
                <div
                  className="inner-percent"
                  style={{ height: `${(145 / 100) * percent}px` }}
                ></div>
              </div>
              <p className="h7">{titleList[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
