import React from "react";
import { trash } from "components/ImgUtils";
export default function DeletableList(props) {
  const { deletableList } = props;
  return (
    <div className="">
      {deletableList.map((list) => {
        const { img, contentTxt, id, isDelete } = list;
        return (
          <div
            key={id}
            className={isDelete ? "horiz-item type-delete" : "horiz-item"}
          >
            <div className={"horiz-inner"}>
              <div className="horiz-top">
                <div className="horiz-ima-box">
                  <img src={img} alt="" />
                </div>
                <div className="">
                  <div className="top-desc-con">
                    <div className="top-icon h7 mr5">LV.30</div>
                    <div className="top-icon h7">LV.30</div>
                  </div>
                  <div className="list-content weight500">{contentTxt}</div>
                </div>
              </div>
            </div>
            {isDelete ? (
              <div className="delete-item">
                <img src={trash} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
