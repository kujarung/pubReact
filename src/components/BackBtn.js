import React from 'react';

export default function BackBtn(props) {
  const { btnTxt, isGray, isSmall } = props;
  return (
    <input
      type="button"
      className={`btn-con main-back btn-font`}
      style={{
        backgroundColor: isGray ? '#c1c0c8' : '--primary',
        width: isSmall ? '100px' : '100%',
      }}
      value={btnTxt}
    ></input>
  );
}
