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
        <div className="icon-img-con">
          <img src={infoWhite} alt="" />
        </div>
      ) : rightItem === 'hasX' ? (
        <div className="icon-img-con">
          <img src={whiteX} alt="" />
        </div>
      ) : (
        <div className="d-flex x-eq">
          <div className="icon-img-con">
            <img src={heart} alt="" />
          </div>
          <div className="icon-img-con">
            <img src={imgEx} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
