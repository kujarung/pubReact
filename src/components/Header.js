import React from 'react';
import { sidelist, activity, search } from 'components/ImgUtils';

export default function Header(props) {
  const { openDrawer, isFixed } = props;

  return (
    <>
      <div className={isFixed ? 'header fixed' : 'header'}>
        <div className="icon-img-con x-start" onClick={() => openDrawer()}>
          <img src={sidelist} alt="sidelist" />
        </div>
        <div className="d-flex">
          <button className="icon-img-con x-end">
            <img src={activity} alt="activity" />
          </button>
          <button className="icon-img-con x-end">
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </>
  );
}
