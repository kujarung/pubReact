import React from 'react';

export default function Checkbox(props) {
  const {
    checkbox: { id, txt, checked },
    noMargin,
  } = props;
  return (
    <div className={noMargin ? 'check-con no-margin' : 'check-con'}>
      <input type="checkbox" id={id} checked={checked} />
      <label htmlFor={id}>{txt}</label>
    </div>
  );
}
