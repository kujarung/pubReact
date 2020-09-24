import React from "react";

export default function OverRayList(props) {
  const { overRayList } = props;
  return (
    <div className="vertical-list-wrap">
      {overRayList.map((item) => (
        <div className="vertical-item" key={item.id}>
          <div className="over-ray-con">
            <h6 className="color-white weight500">{item.overTxt}</h6>
          </div>
          <div className="vertical-item-img">
            <img src={item.img} alt="" />
          </div>
          <div className="vertical-txt-container">
            <div className="mb7">
              <h6 className="d-flex weight500">
                {item.contentTxt} <span className="inner-empty" />.
              </h6>
            </div>
            <div className="">
              <div className="h7 color-gray">{item.contentDesc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
