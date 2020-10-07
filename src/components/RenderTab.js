import React from 'react';

export default function RenderTab(props) {
  const { tabList, clickTab, isFull, isSmall } = props;
  return isSmall ? (
    <div className={'tab-container full'}>
      {tabList.map((tab) => (
        <button
          style={
            isFull
              ? {
                  width: `calc(${100 / tabList.length}% - 20px)`,
                  textAlign: 'center',
                  marginLeft: '10px',
                  marginRight: '10px',
                }
              : {}
          }
          key={tab.id}
          className={tab.active ? 'tab active' : 'tab'}
          onClick={() => clickTab(tab.id)}
        >
          <p>{tab.title}</p>
        </button>
      ))}
    </div>
  ) : (
    <div className={isFull ? 'tab-container full' : 'tab-container'}>
      {tabList.map((tab) =>
        isFull ? (
          <button
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
          </button>
        ) : (
          <div className="">
            <button
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
            </button>
          </div>
        ),
      )}
    </div>
  );
}
