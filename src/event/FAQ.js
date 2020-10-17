import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import RenderTab from "../components/RenderTab";
import SerchInput from "../components/SerchInput";
import SqareTab from "../components/SqareTab";
import Accordion from "../components/Accordion";

export default function FAQ(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "대분류1", active: false },
    { id: 2, title: "대분류2", active: false },
    { id: 3, title: "대분류3", active: true }
  ]);

  const clickTab = id => {
    const resultTab = tabList.map(tab =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList(resultTab);
  };

  return (
    <>
      <StackHeader />
      <div className="bothSpace pt29 mb30">
        <h3 className="weight500 stack-content">자주 묻는 질문</h3>
      </div>

      <div className="bothSpace mb17">
        <SerchInput />
      </div>

      <div className="mb30">
        <RenderTab tabList={tabList} isFull clickTab={clickTab} />
      </div>

      <div className="bothSpace mb17">
        <SqareTab />
      </div>
      <div className="bothSpace mb8">
        <div className="h7">
          결제이용방법 관련 질문 <span className="color-primary">4건</span>
        </div>
      </div>
      <div className="mb42">
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </>
  );
}
