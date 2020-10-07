import React from 'react';
import { trash } from 'components/ImgUtils';
export default function DeletableList(props) {
  const { deletableList } = props;
  return (
    <div className="">
      {deletableList.map((list) => {
        const { img, contentTxt, id, isDelete } = list;
        return (
          <div key={id} className={'horiz-item type-delete'}>
            <div
              className={isDelete ? 'horiz-inner pos-delete' : 'horiz-inner'}
            >
              <a href="#">
                <div className="horiz-top">
                  <div className="horiz-ima-box">
                    <img src={img} alt="" />
                  </div>
                  <div className="">
                    <div className="top-desc-con">
                      <div className="top-icon h7 mr5">East Asia Pacific</div>
                      <div className="top-icon h7">LV.30</div>
                    </div>
                    <div className="list-content weight500">{contentTxt}</div>
                  </div>
                </div>
              </a>
            </div>
            {isDelete ? <button className="delete-item"></button> : ''}
          </div>
        );
      })}
    </div>
  );
}
