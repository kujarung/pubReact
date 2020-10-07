import React, { useState } from 'react';
import Swich from 'components/Swich';

export default function SettingRowWithSwich(props) {
  const { title, desc, currentActive } = props;
  const [isActive, setIsActive] = useState(currentActive);

  const clickEvent = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={isActive ? 'item-list-row' : 'item-list-row inactive'}>
      <p className="txt">
        {title}
        <p className="h7 color-gray mt6">{desc}</p>
      </p>
      <Swich active={currentActive} clickEvent={clickEvent} />
    </div>
  );
}
