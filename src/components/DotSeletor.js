import React, { useState } from 'react';
import { dot } from 'components/ImgUtils';

export default function DotSelector(props) {
  const [showDesc, setShowDesc] = useState(false);
  const { dotList } = props;
  return (
    <>
      <div className="dot-wrap">
        <div className="dot-con" onClick={() => setShowDesc(!showDesc)}>
          <img src={dot} alt="" />
        </div>
        <div className={showDesc ? 'dot-desc-con active' : 'dot-desc-con'}>
          {dotList ? (
            dotList.map((val) => (
              <div className={val.active ? 'dot-font active' : 'dot-font'}>
                <p>{val.title}</p>
              </div>
            ))
          ) : (
            <>
              <div className="dot-font active">
                <p>다른 예문 보기</p>
              </div>
              <div className="dot-font">
                <p>구글 번역 (새창)</p>
              </div>
              <div className="dot-font">
                <p>파파고 번역 (새창)</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
