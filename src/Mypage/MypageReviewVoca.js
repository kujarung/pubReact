import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import {
  avatar,
  info,
  tempback1,
  tempback2,
  review,
  completeStudy,
  nodap
} from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";
import RenderTab from "components/RenderTab";
import MultiCircleProgress from "components/MultiCircleProgress";
import OverRayList from "components/OverRayList";
import BackBtn from "components/BackBtn";

export default function MypageReview(props) {
  const overRayList = [
    {
      id: 1,
      overTxt: "Mauritius Copes With Split Japanese Ship That Spilled Oil",
      contentTxt: "It’s just a",
      contentDesc: "이건 그냥 장난감이야.",
      img: tempback1
    },
    {
      id: 2,
      overTxt: "Mauritius Copes With Split Japanese Ship That Spilled Oil",
      contentTxt: "It’s just a",
      contentDesc: "이건 그냥 장난감이야.",
      img: tempback2
    },
    {
      id: 3,
      overTxt: "Mauritius Copes With Split Japanese Ship That Spilled Oil",
      contentTxt: "It’s just a",
      contentDesc: "이건 그냥 장난감이야.",
      img: avatar
    }
  ];

  const [tabList, setTabList] = useState([
    { id: 1, title: "활동지수", active: false },
    { id: 2, title: "마이퍼센트", active: false },
    { id: 3, title: "리뷰하기", active: true }
  ]);

  const [selectTab, setSelectTab] = useState([
    { id: 112, title: "Reading", active: true },
    { id: 224, title: "Vocabulary", active: false }
  ]);

  const clickTab = id => {
    const resultTab = tabList.map(tab =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList(resultTab);
  };

  const clickTab2 = id => {
    const resultTab = selectTab.map(tab =>
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
    "#bio21"
  ];

  return (
    <>
      <StackHeader />

      <div className="mb32 pt2 stack-content">
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
          {hashList.map(hash => (
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
            <button className="pos-info-icon">
              <img
                src={info}
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            </button>
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
          {selectTab.map(tab => (
            <button
              className={tab.active ? "select-tab active" : "select-tab"}
              key={tab.id}
              onClick={() => clickTab2(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="title-container bothSpace">
          <h5 className="weight500">오답 단어 목록</h5>
          <a href="#">
            <p className="smallFont weight500 primary-color">더보기</p>
          </a>
        </div>

        <div className="mb50">
          <OverRayList overRayList={overRayList} />
        </div>

        <div>
          <div className="title-container bothSpace">
            <h5 className="weight500">주간 단어 학습 성취도</h5>
          </div>
          <div className="pos-rel">
            <MultiCircleProgress percent1={90} percent2={5} percent3={5} />
            <div className="circle-label-con">
              <div className="circle-label-info">
                <div className="label-item">
                  <div className="label-title primary">학습완료</div>
                  <div className="label-desc">100개</div>
                </div>

                <div className="label-item navy">
                  <div className="label-title ">리뷰중</div>
                  <div className="label-desc">66개</div>
                </div>

                <div className="label-item sky">
                  <div className="label-title">오답</div>
                  <div className="label-desc">14개</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex x-eq pl33 pr33 pb20 mb30">
          <div>
            <div className="pos-rel">
              <CircleProgress width={"90"} percent={"81"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <img src={completeStudy} alt="" style={{ width: "32px" }} />
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight400">학습완료</h6>
          </div>
          <div>
            <div className="pos-rel">
              <CircleProgress
                width={"90"}
                percent={"67"}
                small={true}
                color={"#002872"}
              />
              <div className="circle-label-con">
                <div className="circle-label">
                  <img src={review} alt="" style={{ width: "32px" }} />
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight400">리뷰 중</h6>
          </div>
          <div>
            <div className="pos-rel">
              <CircleProgress
                width={"90"}
                percent={"17"}
                small={true}
                color="#9ABEFF"
                railColor="#F6F6F6"
              />
              <div className="circle-label-con">
                <div className="circle-label">
                  <img src={nodap} alt="" style={{ width: "32px" }} />
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight400">오답</h6>
          </div>
        </div>

        <div className="pl20 pr20">
          <BackBtn btnTxt="오답 학습하기" />
        </div>
      </div>
    </>
  );
}
