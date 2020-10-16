import React from 'react';

export default function AnserBtn(props) {
  const { active, btnTxt, click } = props;
  return (
    <input
      type="button"
      className={active ? 'btn-con anser active' : 'btn-con anser '}
      value={btnTxt}
    ></input>
  );
}
