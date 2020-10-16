import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { avatar, tempback1, tempback2 } from "components/ImgUtils";
import RenderTab from "components/RenderTab";
import WrongAnserList from "components/WrongAnserList";
import BackBtn from "components/BackBtn";
export default function WordList1(props) {
  const wrongAnserList = [
    {
      id: 1,
      contentTxt:
        "Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…",
      img: tempback1
    },
    {
      id: 2,
      contentTxt:
        "Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…",
      img: tempback2,
      isDelete: true
    },
    {
      id: 3,
      contentTxt: "Mauritius Copes With Copes WithCopes WithCopes With",
      img: avatar
    }
  ];

  const [selectTab, setSelectTab] = useState([
    { id: 112, title: "예문", active: true },
    { id: 224, title: "단어뜻", active: false }
  ]);

  const clickTab = id => {
    const resultTab = selectTab.map(tab =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setSelectTab(resultTab);
  };

  return (
    <>
      <StackHeader />
      <div className="title-container bothSpace mb35 pt30 stack-content">
        <h3 className="weight500">오답 단어 목록</h3>
        <p className="smallFont weight500 primary-color">27개</p>
      </div>
      <div className="mb20">
        <RenderTab tabList={selectTab} clickTab={clickTab} isFull={true} />
      </div>

      <div className="mb80">
        <WrongAnserList wrongAnserList={wrongAnserList} isProbleam />
      </div>

      <div className="bottom-fixed">
        <BackBtn btnTxt="오답 학습하기" />
      </div>
    </>
  );
}
