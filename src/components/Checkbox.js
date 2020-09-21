import React from "react";

export default function Checkbox(props) {
  const { id, txt } = props.checkbox;
  return (
    <div className="check-con">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{txt}</label>
    </div>
  );
}
