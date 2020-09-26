import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { avatar, info, tempback1, tempback2 } from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";
import VerticalList from "components/VerticalList";
import RenderTab from "components/RenderTab";
import Barchart from "components/Barchart";

export default function MypageReviewRead(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "활동지수", active: false },
    { id: 2, title: "마이퍼센트", active: false },
    { id: 3, title: "리뷰", active: true },
  ]);

  const [selectTab, setSelectTab] = useState([
    { id: 112, title: "Reading", active: true },
    { id: 224, title: "Vocabulary", active: false },
  ]);
  const verticalList = [
    {
      id: 1,
      imgPath: tempback1,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
    },
    {
      id: 2,
      imgPath: tempback2,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
    },
    {
      id: 3,
      imgPath: tempback1,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
    },
    {
      id: 4,
      imgPath: tempback2,
      date: "Apr 18, 2020",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
    },
  ];

  const clickTab = (id) => {
    const resultTab = tabList.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList(resultTab);
  };

  const clickTab2 = (id) => {
    const resultTab = selectTab.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setSelectTab(resultTab);
  };
  const hashList = [
    "#devleoper",
    "#design",
    "#computer",
    "#weather",
    "#bio2",
    "#dev2",
    "#design2",
    "#computer2",
    "#weather2",
    "#bio21",
  ];

  return (
    <>
      <StackHeader />

      <div className="mb32 pt2">
        <div className="d-flex x-eq mb3 bothSpace">
          <div>
            <h6 className="color-primary weight500 mb3">PRO</h6>
            <h2 className="small fontAvenirBold">@mybrains</h2>
          </div>
          <div className="avatar-img-con small">
            <img src={avatar} alt="" />
          </div>
        </div>

        <div className="hash-txt-wrap mb35 bothSpace">
          {hashList.map((hash) => (
            <div className="hash-txt" key={hash}>
              {hash}
            </div>
          ))}
        </div>

        <div className="info-box-wrap bothSpace">
          <div className="info-box">
            <h3 className="big mb22 weight400">
              12<span className="small-desc">개월</span>
            </h3>
            <p className="h7 mb7 color-gray">구독중입니다.</p>
            <div className="tag-item small no-margin he-auto">
              <p className="tag-txt color-primary">256일 남음</p>
            </div>
          </div>

          <div className="info-box mb50">
            <div className="pos-info-icon">
              <img
                src={info}
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            </div>
            <div className="mb12 pos-rel">
              <CircleProgress width={"82"} percent={"42"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">42%</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="small weight300">약 12,123,123 개</h5>
              <p className="h7 color-gray">내가 읽을 수 있는 콘텐츠</p>
            </div>
          </div>
        </div>

        <div className="mb20">
          <RenderTab tabList={tabList} clickTab={clickTab} isFull={true} />
        </div>

        <div className="select-tab-con mb20">
          {selectTab.map((tab) => (
            <div
              className={tab.active ? "select-tab active" : "select-tab"}
              key={tab.id}
              onClick={() => clickTab2(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="">
          <div className="title-container bothSpace">
            <h5 className="weight500">최근 본 컨텐츠</h5>
            <p className="smallFont weight500 primary-color">더보기</p>
          </div>
          {<VerticalList verticalList={verticalList} />}
        </div>

        <div className="bothSpace">
          <div className="mb8">
            <h5 className="weight500">최근 읽기 학습량</h5>
          </div>
          <div className="">
            <Barchart
              title={"75450"}
              percentList={[20, 30, 10, 50, 50, 100, 10]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
