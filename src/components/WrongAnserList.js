import React from "react";

export default function WrongAnserList(props) {
  const { deletableList } = props;
  return (
    <div className="">
      {deletableList.map((list) => {
        const { img, contentTxt, id } = list;
        return (
          <div key={id} className={"horiz-item "}>
            <div className={"horiz-inner"}>
              <div className="horiz-top">
                <div className="horiz-ima-box">
                  <img src={img} alt="" />
                </div>
                <div className="list-content weight500">{contentTxt}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
