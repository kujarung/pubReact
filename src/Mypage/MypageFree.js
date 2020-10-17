import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { avatar, info } from "components/ImgUtils";
import CircleProgress from "components/CircleProgress";
import RenderTab from "components/RenderTab";
import CardList from "components/CardList";
import ReactEcharts from "echarts-for-react";

export default function MypageFree(props) {
  const [tabList, setTabList] = useState([
    { id: 1, title: "활동지수", active: true },
    { id: 2, title: "마이퍼센트", active: false },
    { id: 3, title: "리뷰", active: false }
  ]);

  const [tabList2, setTabList2] = useState([
    { id: 10, title: "월", active: true },
    { id: 20, title: "화", active: false },
    { id: 30, title: "수", active: false },
    { id: 50, title: "목", active: false },
    { id: 60, title: "금", active: false },
    { id: 70, title: "토", active: false },
    { id: 80, title: "일", active: false }
  ]);
  const list = [
    {
      id: 11,
      percent: "40%",
      title: "상위 40%",
      desc: "당신의 순위를 확인하세요!"
    },
    {
      id: 12,
      percent: "100%",
      title: "출석률",
      desc: "출석 점수를 획득하세요!"
    },
    {
      id: 13,
      percent: "82%",
      title: "도전과제 달성률",
      desc: "다음 과제에 도전하세요!"
    }
  ];
  const clickTab = id => {
    const resultTab = tabList.map(tab =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList(resultTab);
  };

  const clickTab2 = id => {
    const resultTab = tabList2.map(tab =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabList2(resultTab);
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
          <div className="">
            <h6 className="color-primary weight500 mb3">FREE</h6>
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
            <h5 className="small weight300 mb22 line-h27">
              무료 용권을
              <br />
              사용중입니다.
            </h5>
            <a href="#">
              <p className="h7 color-primary primary-underline">
                이용권 구매하기
              </p>
            </a>
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
            <div className="">
              <h5 className="small weight300">약 12,123,123 개</h5>
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
            <div>
              <h5 className="weight500">일일 학습 기록</h5>
            </div>
            <button className="small-icon">
              <img src={info} alt="" />
            </button>
          </div>
        </div>

        <div className="mb25">
          <RenderTab tabList={tabList2} isFull isSmall clickTab={clickTab2} />
        </div>

        <div className="d-flex x-eq pl33 pr33 pb20 pt10 mb30 lock">
          <div>
            <div className="pos-rel">
              <CircleProgress width={"90"} percent={"81"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">81%</div>
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight400">Reading</h6>
          </div>
          <div>
            <div className="pos-rel">
              <CircleProgress width={"90"} percent={"67"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">67%</div>
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight400">Vocabulary</h6>
          </div>
          <div>
            <div className="pos-rel">
              <CircleProgress width={"90"} percent={"17"} small={true} />
              <div className="circle-label-con">
                <div className="circle-label">
                  <div className="label-txt small fontAvenirBold">17%</div>
                </div>
              </div>
            </div>
            <h6 className="mt8 tc weight400">Review</h6>
          </div>
        </div>

        <div className="bothSpace">
          <div className="d-flex x-eq y-center mb10">
            <div>
              <h5 className="weight500">주간 성장 그래프</h5>
            </div>
            <div>
              <p className="smallFont color-primary weight500">+123.4개</p>
            </div>
          </div>

          <div className="chart-con mb50 over-hidden lock">
            <ReactEcharts
              style={{ height: "250px", overflow: "hidden" }}
              option={{
                grid: {
                  left: 30,
                  top: 10
                },
                width: "85%",
                height: "85%",
                color: "#1769ff",
                xAxis: {
                  boundaryGap: false,
                  data: ["월", "화", "수", "목", "금", "토", "일"],
                  minorSplitLine: {
                    show: false
                  },
                  splitLine: {
                    show: true,
                    interval: "auto",
                    lineStyle: {
                      color: "#F0F0F0"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  axisLine: {
                    show: false
                  }
                },
                yAxis: {
                  show: false,
                  axisLine: {
                    show: true
                  }
                },
                series: [
                  {
                    markPoint: {
                      animation: false,
                      data: [
                        {
                          type: "max",
                          symbolSize: [46, 27],
                          symbolOffset: [0, -25],
                          symbol:
                            "path://M42,57.7941176 C44.209139,57.7941176 46,59.5849786 46,61.7941176 L46,76.7941176 C46,79.0032566 44.209139,80.7941176 42,80.7941176 L26.047,80.7941176 L22.9183673,84.7941176 L19.669,80.7941176 L4,80.7941176 C1.790861,80.7941176 2.705415e-16,79.0032566 0,76.7941176 L0,61.7941176 C-2.705415e-16,59.5849786 1.790861,57.7941176 4,57.7941176 L42,57.7941176 Z",
                          itemStyle: {
                            color: "#EFEFEF"
                          },
                          label: {
                            fontSize: 12,
                            color: "#02010E"
                          }
                        }
                      ]
                    },
                    type: "line",
                    data: [0, 32, 5, 19, 12, 43, 20],
                    lineStyle: {
                      width: 3
                    },
                    symbol: "circle",
                    symbolSize: 8
                  }
                ]
              }}
            />
          </div>
        </div>

        <div className="bothSpace">
          <div className="mb25">
            <h5 className="weight500">월간 학습 요약</h5>
          </div>
          <div className="info-box-wrap type2">
            <div className="info-box lock">
              <div className="">
                <i className="default-icon bck clock" />
              </div>

              <div>
                <h4 className="weight500">
                  55<span className="info-small-desc">min</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  총 학습시간
                </h5>
              </div>
            </div>
            <div className="info-box lock">
              <div className="">
                <i className="default-icon bck aa" />
              </div>
              <div>
                <h4 className="weight500">
                  10.9<span className="info-small-desc">개</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  새롭게 알게 된<br />
                  단어의 수
                </h5>
              </div>
            </div>
            <div className="info-box lock">
              <div className="">
                <i className="default-icon bck glass" />
              </div>
              <div>
                <h4 className="weight500">
                  93<span className="info-small-desc">개</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  총 학습한
                  <br />
                  콘텐츠 수
                </h5>
              </div>
            </div>

            <div className="info-box lock">
              <div className="">
                <i className="default-icon bck book" />
              </div>
              <div>
                <h4 className="weight500">
                  2461<span className="info-small-desc">개</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  읽을 수 있게된
                  <br />
                  콘텐츠 수
                </h5>
              </div>
            </div>

            <div className="info-box lock">
              <div className="">
                <i className="default-icon bck goal" />
              </div>
              <div>
                <h4 className="weight500">
                  40<span className="info-small-desc">%</span>
                </h4>
                <h5 className="info-desc small color-bordergray">
                  현재 달성률
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
