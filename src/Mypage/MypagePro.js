import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import {
  avatar,
  info,
  book,
  clock,
  glass,
  goal,
  aa,
} from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";
import RenderTab from "components/RenderTab";
import CardList from "components/CardList";
import ReactEcharts from "echarts-for-react";

export default function MypagePro(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "활동지수", active: true },
    { id: 2, title: "마이퍼센트", active: false },
    { id: 3, title: "리뷰", active: false },
  ]);

  const [tabList2, setTabList2] = useState([
    { id: 10, title: "월", active: true },
    { id: 20, title: "화", active: false },
    { id: 30, title: "수", active: false },
    { id: 40, title: "수", active: false },
    { id: 50, title: "목", active: false },
    { id: 60, title: "금", active: false },
    { id: 70, title: "토", active: false },
    { id: 80, title: "일", active: false },
  ]);
  const list = [
    {
      percent: "40%",
      title: "상위 40%",
      desc: "당신의 순위를 확인하세요!",
    },
    {
      percent: "100%",
      title: "출석률",
      desc: "출석 점수를 획득하세요!",
    },
    {
      percent: "82%",
      title: "도전과제 달성률",
      desc: "다음 과제에 도전하세요!",
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
    "#bio2",
  ];

  return (
    <>
      <StackHeader />

      <div className="mb32 pt2">
        <div className="d-flex x-eq mb3 bothSpace">
          <div className="">
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
            <h3 className="big mb22 weight500">
              12<span className="small-desc">개월</span>
            </h3>
            <p className="h7 mb7 color-gray">구독중입니다.</p>
            <div class="tag-item small no-margin">
              <p class="tag-txt color-primary">256일 남음</p>
            </div>
          </div>

          <div className="info-box mb50">
            <div className="mb12 pos-rel">
              <CircleProgress width={"82"} percent={"42"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">42%</div>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="small weight500">약 12,123,123 개</h5>
              <p className="h7 color-gray">내가 읽을 수 있는 콘텐츠</p>
            </div>
          </div>
        </div>

        <div className="mb20">
          <RenderTab tabList={tabList} clickTab={clickTab} isFull={true} />
        </div>

        <div className="mb50">
          <CardList list={list} />
        </div>

        <div className="mb35 bothSpace">
          <div className="d-flex x-eq y-center">
            <div className="">
              <h5 className="weight500">일일 학습 기록</h5>
            </div>
            <div className="small-icon">
              <img src={info} alt="" />
            </div>
          </div>
        </div>

        <div className="mb25">
          <RenderTab tabList={tabList2} />
        </div>

        <div className="d-flex x-eq pl33 pr33 mb50">
          <div className="">
            <div className="pos-rel">
              <CircleProgress width={"70"} percent={"81"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">81%</div>
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight500">Reading</h6>
          </div>
          <div className="">
            <div className="pos-rel">
              <CircleProgress width={"70"} percent={"67"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">67%</div>
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight500">Vocabulary</h6>
          </div>
          <div className="">
            <div className="pos-rel">
              <CircleProgress width={"70"} percent={"17"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">17%</div>
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight500">Review</h6>
          </div>
        </div>

        <div className="bothSpace">
          <div className="d-flex x-eq y-center mb10">
            <div className="">
              <h5 className="weight500">주간 성장 그래프</h5>
            </div>
            <div className="">
              <p className="smallFont color-primary weight500">+123.4개</p>
            </div>
          </div>

          <div className="chart-con mb50">
            <ReactEcharts
              option={{
                grid: {
                  left: 0,
                  top: 10,
                },
                width: "95%",
                height: "85%",
                color: "#1769ff",
                xAxis: {
                  data: ["월", "화", "수", "목", "금", "토", "일"],
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: "#F0F0F0",
                    },
                  },
                  axisTick: {
                    show: false,
                  },
                  axisLine: {
                    show: false,
                  },
                },
                yAxis: {
                  show: false,
                  axisLine: {
                    show: true,
                  },
                },
                series: [
                  {
                    type: "line",
                    data: [0, 32, 5, 19, 12, 43, 20],
                    lineStyle: {
                      width: 3,
                    },
                    symbol: "circle",
                    symbolSize: 8,
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="bothSpace">
          <div className="">
            <h5 className="weight500">월간 학습 요약</h5>
          </div>
          <div className="info-box-wrap type2">
            <div className="info-box">
              <div className="default-icon">
                <img src={clock} alt="" />
              </div>
              <div className="">
                <h4 className="mb12 weight500">
                  55<span className="info-small-desc">min</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  총 학습시간
                </h5>
              </div>
            </div>
            <div className="info-box">
              <div className="default-icon">
                <img src={aa} alt="" />
              </div>
              <div className="">
                <h4 className="mb12 weight500">
                  10.9<span className="info-small-desc">개</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  새롭게 알게 된<br />
                  단어의 수
                </h5>
              </div>
            </div>

            <div className="info-box">
              <div className="default-icon">
                <img src={aa} alt="" />
              </div>
              <div className="">
                <h4 className="mb12 weight500">
                  10.9<span className="info-small-desc">개</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  새롭게 알게 된<br />
                  단어의 수
                </h5>
              </div>
            </div>

            <div className="info-box">
              <div className="default-icon">
                <img src={aa} alt="" />
              </div>
              <div className="">
                <h4 className="mb12 weight500">
                  10.9<span className="info-small-desc">개</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  새롭게 알게 된<br />
                  단어의 수
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
