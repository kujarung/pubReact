import React from 'react';
import { back } from 'components/ImgUtils';

export default function Drawer(props) {
  const { isActive, closeDrawer } = props;
  return (
    <div className={isActive ? 'drawer active' : 'drawer'}>
      <div className="drawe-inner">
        <div className="back-btn-con tr" onClick={() => closeDrawer()}>
          <button>
            <img src={back} alt="" />
          </button>
        </div>
        <div className="bothSpace">
          <div className="bottom-small-line small long mb32">
            <h5 className="weight500">오늘의 콘텐츠</h5>
          </div>

          <ul className="menu-list">
            <li>
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#">마이 페이지</a>
            </li>
            <li>
              <a href="#">리딩 퍼센트 사용법</a>
            </li>
            <li>
              <a href="#">설정</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
