import React from 'react';

export default function AnserBtn(props) {
  const { id, active, btnTxt, clickSelectItem } = props;

  return (
    <input
      onClick={() => clickSelectItem(id)}
      type="button"
      className={active ? 'btn-con anser active' : 'btn-con anser '}
      value={btnTxt}
    />
  );
}
