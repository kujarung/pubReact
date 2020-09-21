import React from "react";

export default function VerticalList(props) {
  const { verticalList } = props;
  return (
    <div className="vertical-list-wrap mb20">
      {verticalList.map((item) => {
        const { imgPath, date, content, id } = item;
        return (
          <div className="vertical-item" key={id}>
            <div className="vertical-item-img">
              <img src={`${imgPath}`} alt="" />
            </div>
            <div className="vertical-txt-container">
              <div className="top-desc-con">
                <div className="date-txt">{date}</div>
                <div className="top-icon no-space h7">LV.30</div>
              </div>
              <h6 className="list-content weight500">{content}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
