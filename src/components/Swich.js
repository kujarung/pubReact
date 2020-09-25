import React from "react";

export default function Swich(props) {
  const { active } = props;
  return (
    <label className="switch">
      <input type="checkbox" checked={active} />
      <span className="slider" />
    </label>
  );
}
