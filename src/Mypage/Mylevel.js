import React, { useState } from "react";
import Header from "components/Header";
import { icContents, tempbak3, tempbak4, tempbak5 } from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";
import TodoList from "components/TodoList";
import RenderTab from "components/RenderTab";
import HorizList from "components/HorizList";

export default function Mylevel(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "Level 20", active: true },
    { id: 2, title: "Level 30", active: false },
    { id: 3, title: "Level 40", active: false },
  ]);

  const clickTab = (id) => {
    const resultTab = tabList.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList(resultTab);
  };

  const horzList = [
    {
      id: 112,
      imgPath: tempbak3,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
      type: "empty",
    },
    {
      id: 2321,
      imgPath: tempbak4,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
      type: "empty",
    },
    {
      id: 4,
      imgPath: tempbak5,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
      type: "empty",
    },
  ];

  const { openDrawer } = props;
  return (
    <>
      <Header openDrawer={openDrawer} />

      <div className="title-container bothSpace mb32 pt22">
        <div>
          <h2 className="samll fontAvenirBold">Percent</h2>
        </div>
        <div className="title-help-icon">
          <img src={icContents} alt="percent-img" />
        </div>
      </div>

      <div className="pos-rel mb50">
        <CircleProgress width="280" percent={42} />
        <div className="circle-label-con">
          <div className="circle-label">
            <div className="label-txt big mb4">
              42<span className="per">%</span>
            </div>
            <div className="desc mb14">
              현재 닉네임님은 전체 콘텐츠 중<br />약 20%를 읽을 수 있어요.
            </div>
            <div className="d-flex x-center">
              <div className="tag-item no-margin">
                <p className="tag-txt color-primary">자세히보기</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb20 bothSpace">
          <h5 className="weight500">추천 할일</h5>
        </div>

        <div>
          <TodoList isComplete={false} />
        </div>
      </div>

      <div>
        <div className="mb20 bothSpace">
          <h5 className="weight500">완료 한 일</h5>
        </div>

        <div>
          <TodoList isComplete={true} />
        </div>

        <div className="mb20">
          <RenderTab tabList={tabList} clickTab={clickTab} isFull={true} />
        </div>

        <div className="mb25 bothSpace">
          <h5 className="weight500">추천 콘텐츠</h5>
        </div>

        <div className="">{<HorizList horzList={horzList} />}</div>
      </div>
    </>
  );
}
