import React from 'react';
import { infoWhite } from 'components/ImgUtils';

export default function ImageCardItem(props) {
  const { size, round, hasInfo } = props;
  return (
    <div
      className={`img-list-container auto ${size} ${round}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.2) 100%), 
        url(${props.imgPath})`,
      }}
    >
      {hasInfo ? (
        <div className="img-inner-info">
          <img
            src={infoWhite}
            alt=""
            style={{ width: '15px', height: '15px' }}
          />
        </div>
      ) : null}

      <div className="bottom-container">
        <div className="top-icon-list">
          <div className="top-icon h7">Global</div>
          <div className="top-icon h7">Lv.30</div>
        </div>
        <h4 className="inner-content weight500 ">{props.content}</h4>
      </div>
    </div>
  );
}
