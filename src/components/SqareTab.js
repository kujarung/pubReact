import React, { useState } from 'react';

export default function SqareTab() {
  const [list, setList] = useState([
    {
      id: 1,
      title: '결제 이용방법',
      isActive: false,
    },
    {
      id: 2,
      title: '주문/배송',
      isActive: false,
    },
    {
      id: 3,
      title: '쿠폰',
      isActive: false,
    },
    {
      id: 4,
      title: '결제/환불',
      isActive: false,
    },
    {
      id: 5,
      title: '포인트',
      isActive: false,
    },
    {
      id: 6,
      title: '멤버십',
      isActive: true,
    },
  ]);

  const clickTab = (id) => {
    const result = list.map((item) =>
      item.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false },
    );
    setList(result);
  };
  return (
    <div className="sqare-tab-con">
      {list.map((itme) => (
        <button
          className={itme.isActive ? 'sqare-tab active' : 'sqare-tab'}
          key={itme.id}
          onClick={() => clickTab(itme.id)}
        >
          <p>{itme.title}</p>
        </button>
      ))}
    </div>
  );
}
