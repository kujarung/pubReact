import React, { useState } from 'react';

export default function Swich(props) {
  const { active } = props;
  const [isActive, setIsActive] = useState(active);
  const clcikEvent = () => {
    setIsActive(!isActive);
    props.clickEvent();
  };
  return (
    <div className="switch" onClick={clcikEvent}>
      <input type="checkbox" checked={isActive} />
      <span className="slider" />
    </div>
  );
}
