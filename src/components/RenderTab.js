import React from 'react';

export default function RenderTab(props) {
  const { tabList, clickTab, isFull } = props;
  return (
    <div
      className={
        isFull ? 'tab-container bothSpace full' : 'tab-container bothSpace'
      }
    >
      {tabList.map((tab) => (
        <div
          style={
            isFull
              ? {
                  width: `calc(${100 / tabList.length}% - 40px)`,
                  textAlign: 'center',
                }
              : {}
          }
          key={tab.id}
          className={tab.active ? 'tab active' : 'tab'}
          onClick={() => clickTab(tab.id)}
        >
          <p>{tab.title}</p>
        </div>
      ))}
    </div>
  );
}
