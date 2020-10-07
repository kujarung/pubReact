import React from 'react';
import {
  backWhite,
  heart,
  imgEx,
  infoWhite,
  whiteX,
} from 'components/ImgUtils';
import { Link } from 'react-router-dom';

export default function StackHeaderWhite(props) {
  const { isAbsol, rightItem } = props;
  return (
    <div className={isAbsol ? 'header absol' : 'header'}>
      <Link to="/">
        <div className="icon-img-con arr">
          <img src={backWhite} alt="back-btn" />
        </div>
      </Link>
      {rightItem === 'info' ? (
        <button className="icon-img-con">
          <img src={infoWhite} alt="" />
        </button>
      ) : rightItem === 'hasX' ? (
        <button className="icon-img-con">
          <img src={whiteX} alt="" />
        </button>
      ) : (
        <div className="d-flex x-eq">
          <button className="icon-img-con">
            <img src={heart} alt="" />
          </button>
          <button className="icon-img-con">
            <img src={imgEx} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}
