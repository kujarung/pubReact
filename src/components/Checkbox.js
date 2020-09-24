import React from "react";

export default function Checkbox(props) {
  const { id, txt, checked } = props.checkbox;
  return (
    <div className="check-con">
      <input type="checkbox" id={id} checked={checked} />
      <label htmlFor={id}>{txt}</label>
    </div>
  );
}
