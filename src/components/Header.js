import React from 'react';
import { sidelist, activity, search } from 'components/ImgUtils';

export default function Header(props) {
  const { openDrawer, isFixed } = props;

  return (
    <>
      <div className={isFixed ? 'header fixed' : 'header'}>
        <button
          className="icon-img-con slide-list"
          onClick={() => openDrawer()}
        >
          <img src={sidelist} alt="sidelist" />
        </button>
        <div className="d-flex">
          <button className="icon-img-con mr15">
            <img src={activity} alt="activity" />
          </button>
          <button className="icon-img-con">
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </>
  );
}
