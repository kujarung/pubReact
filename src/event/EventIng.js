import React, { useState } from "react";
import { people3, eventImg1 } from "components/ImgUtils";
import StackHeader from "components/StackHeader";
import RenderTab from "../components/RenderTab";

export default function EventIng(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "진행중인 이벤트", active: true },
    { id: 2, title: "종료된 이벤트", active: false }
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
        <h3 className="weight500 stack-content">이벤트</h3>
      </div>

      <div className="mb30">
        <RenderTab tabList={tabList} isFull clickTab={clickTab} />
      </div>

      <div className="event-item-con">
        <a href="#">
          <div className="event-content">
            <h6 className="weight500 mb11">
              이벤트 제목 이벤트 제목 이벤트 제목 이벤트 제목 이벤트 제목 이벤트
              제목
            </h6>
            <div className="d-flex x-eq">
              <div className="smallFont color-gray">
                2020.06.01(금) ~ 2020.06.30(토)
              </div>
              <div class="tag-item small no-margin">
                <p class="tag-txt color-primary">D-7</p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="event-item-con">
        <a href="#">
          <div className="event-img-wrap">
            <div className="event-img-con">
              <img src={eventImg1} alt="" />
            </div>
            <div className="img-desc-tag">
              <div class="tag-item small no-margin">
                <p class="tag-txt color-primary">D-7</p>
              </div>
            </div>
          </div>
          <div className="event-content">
            <h6 className="weight500 mb11">
              이벤트 제목 이벤트 제목 이벤트 제목 이벤트 제목 이벤트 제목 이벤트
              제목
            </h6>
            <div className="smallFont color-gray">
              2020.06.01(금) ~ 2020.06.30(토)
            </div>
          </div>
        </a>
      </div>

      <div className="event-item-con">
        <a href="#">
          <div className="event-img-wrap">
            <div className="event-img-con">
              <img src={people3} alt="" />
            </div>
            <div className="img-desc-tag">
              <div class="tag-item small no-margin">
                <p class="tag-txt color-primary">D-7</p>
              </div>
            </div>
          </div>
          <div className="event-content">
            <h6 className="weight500 mb11">
              이벤트 제목 이벤트 제목 이벤트 제목 이벤트 제목 이벤트 제목 이벤트
              제목
            </h6>
            <div className="smallFont color-gray">
              2020.06.01(금) ~ 2020.06.30(토)
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
