import React from "react";

export default function RenderTab(props) {
  const { tabList, clickTab, isFull } = props;
  return (
    <div
      className={
        isFull ? "tab-container full bothSpace" : "tab-container bothSpace"
      }
    >
      {tabList.map((tab) => (
        <div
          key={tab.id}
          className={tab.active ? "tab active" : "tab"}
          onClick={() => clickTab(tab.id)}
        >
          <p>{tab.title}</p>
        </div>
      ))}
    </div>
  );
}
