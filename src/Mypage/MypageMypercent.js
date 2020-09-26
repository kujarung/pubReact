import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import {
  avatar,
  info,
  tempbak3,
  tempbak4,
  tempbak5,
} from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";
import RenderTab from "components/RenderTab";
import TodoList from "components/TodoList";
import HorizList from "components/HorizList";

export default function MypageMypercent(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "활동지수", active: false },
    { id: 2, title: "마이퍼센트", active: true },
    { id: 3, title: "리뷰", active: false },
  ]);

  const [tabList2] = useState([
    { id: 10, title: "Level 20", active: true },
    { id: 20, title: "Level 30", active: false },
    { id: 30, title: "Level 30", active: false },
  ]);

  const horzList = [
    {
      id: 112,
      imgPath: tempbak3,
      date: "Apr 18, 2020",
      type: "empty",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
    },
    {
      id: 2321,
      imgPath: tempbak4,
      date: "Apr 18, 2020",
      type: "empty",
      content:
        "At least 50 people burned to death in a b… At least 50 people burned to death in a b…",
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

  const clickTab = (id) => {
    const resultTab = tabList.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList(resultTab);
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

          <div className="mb30">
            <RenderTab tabList={tabList2} clickTab={clickTab} isFull={true} />
          </div>

          <div className="mb25 bothSpace">
            <h5 className="weight500">추천 콘텐츠</h5>
          </div>

          <div className="">{<HorizList horzList={horzList} />}</div>
        </div>
      </div>
    </>
  );
}
