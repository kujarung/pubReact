import React from 'react';
import { grayX } from 'components/ImgUtils';

export default function SerchInput(props) {
  const { hasX, placeholder } = props;
  return (
    <div className="search-input-con">
      <input type="text" placeholder={placeholder ? placeholder : ''} />
      {hasX ? (
        <div className="input-right-x">
          <button>
            <img src={grayX} alt="" style={{ width: '12px' }} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
