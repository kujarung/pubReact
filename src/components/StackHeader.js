import React from 'react';
import { backBtn, info } from 'components/ImgUtils';
import { Link } from 'react-router-dom';
import DotSeletor from 'components/DotSeletor';

export default function StackHeader(props) {
  const { rightItem, isAbsol, dotList } = props;
  return (
    <div className={isAbsol ? 'header absol' : 'header'}>
      <Link to="/">
        <div className="icon-img-con arr">
          <img src={backBtn} alt="back-btn" />
        </div>
      </Link>
      {rightItem === 'info' ? (
        <button className="">
          <img src={info} alt="" style={{ width: '24px' }} />
        </button>
      ) : rightItem === 'selector' ? (
        <DotSeletor dotList={dotList} />
      ) : null}
    </div>
  );
}
