import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { arrLeft, arrRight, info } from "components/ImgUtils";
import CustomCalendar from "components/CustomCalendar";

export default function DailyCheck(props) {
  return (
    <>
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
            <img src={info} alt="" style={{ width: "15px", height: "15px" }} />
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
    </>
  );
}
