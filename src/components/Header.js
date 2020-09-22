import React from "react";
import { sidelist, activity, search } from "components/ImgUtils";

export default function Header(props) {
  const { openDrawer } = props;

  return (
    <>
      <div className="header">
        <div className="icon-img-con" onClick={() => openDrawer()}>
          <img src={sidelist} alt="sidelist" />
        </div>
        <div className="d-flex">
          <div className="icon-img-con x-end">
            <img src={activity} alt="activity" />
          </div>
          <div className="icon-img-con x-end">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </>
  );
}
