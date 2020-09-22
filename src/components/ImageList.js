import React from "react";

export default function ImageList(props) {
  const { long } = props;
  return (
    <div
      className={long ? "img-list-container long" : "img-list-container"}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000000 100%), 
        url(${props.imgPath})`,
      }}
    >
      <div className="bottom-container">
        <div className="top-icon-list">
          <div className="top-icon h7">Global</div>
          <div className="top-icon h7">Lv.30</div>
        </div>
        <h4 className="inner-content weight500 ">{props.content}</h4>
      </div>
    </div>
  );
}
