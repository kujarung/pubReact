import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { arrLeft, arrRight, info, grayX } from "components/ImgUtils";
import CustomCalendar from "components/CustomCalendar";

export default function DailyCheck(props) {
  return (
    <>
      <div className="popup-wrap small">
        <div className="inner-pop ">
          <button className="pop-x-btn-con">
            <img src={grayX} alt="" />
          </button>
          <div className="pl10 pr10 mb45">
            <div className="mb45">
              <h4 className="small weight500">출석 점수 산정</h4>
            </div>
          </div>

          <div className="pl10 pr10">
            <div className="attend-item">
              <h6>일일출석</h6>

              <h5 className="small">1p</h5>
            </div>

            <div className="attend-item">
              <h6>일주연속 출석</h6>

              <h5 className="small">5p</h5>
            </div>

            <div className="attend-item">
              <h6>2주연속 출석</h6>

              <h5 className="small">10p</h5>
            </div>

            <div className="attend-item">
              <h6>모두 출석</h6>

              <h5 className="small">15p</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="no-scroll">
        <StackHeader />
        <div className="bothSpace mt29">
          <div className="d-flex x-eq y-center mb25">
            <div className="">
              <img
                src={arrLeft}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="">
              <h3 className="weight500">2020년 4월</h3>
            </div>
            <div className="">
              <img
                src={arrRight}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="desc-info-box mb36">
            <h6 className="color-white weight500">나의 출석 점수</h6>
            <h4 className="color-white fontAvenirBold">
              89,324
              <span className="h7">p</span>
            </h4>
          </div>

          <div className="mb50">
            <CustomCalendar />
          </div>

          <div className="d-flex x-eq mb22">
            <h5 className="weight500">출석 기록</h5>
            <div className="">
              <img
                src={info}
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            </div>
          </div>

          <div className="">
            <div className="todo-inner type2">
              {[1, 2, 3].map((item, index) => (
                <div className="todo-con" key={index}>
                  <div className="">
                    <h6 className="weight400">일일출석</h6>
                  </div>
                  <div className="">
                    <h4 className="fontAvenirBold">
                      1<span className="h7">p</span>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
