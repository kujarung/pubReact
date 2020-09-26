import React from 'react';
import { backBtn, info } from 'components/ImgUtils';
import { Link } from 'react-router-dom';
import DotSeletor from 'components/DotSeletor';

export default function StackHeader(props) {
  const { rightItem, isAbsol } = props;
  return (
    <div className={isAbsol ? 'header absol' : 'header'}>
      <Link to="/">
        <div className="icon-img-con arr">
          <img src={backBtn} alt="back-btn" />
        </div>
      </Link>
      {rightItem === 'info' ? (
        <div className="">
          <img src={info} alt="" style={{ width: '24px' }} />
        </div>
      ) : rightItem === 'selector' ? (
        <DotSeletor />
      ) : null}
    </div>
  );
}
