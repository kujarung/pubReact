import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import { nocupon, free, iconunlimit, iconplus } from "components/ImgUtils";

export default function SubscribeContent(props) {
  return (
    <>
      <StackHeader />
      <div className="mt29 mb30 title-container bothSpace">
        <h3 className="weight500">구독 안내</h3>
        <div className="tag-item small no-margin">
          <p className="tag-txt color-primary">이용권 쿠폰 등록</p>
        </div>
      </div>
      <div className="bothSpace mb10">
        <h5 className="weight500">현재 이용권</h5>
      </div>

      <div className="mb30">
        <div className="horiz-item cupon active">
          <div className="horiz-inner">
            <div className="horiz-top">
              <div
                className="cupon-img mr12"
                style={{ backgroundImage: `url(${nocupon})` }}
              ></div>
              <div className="">
                <div className="d-flex y-center">
                  <h6 className="weight500 mr3">한 이용권</h6>
                  <div className="discount-box">29%할인가</div>
                </div>
                <div className="cupon-content">
                  <div className="h7 ">월 3개 콘텐츠 무제한 학습</div>
                  <div className="">
                    <div className="h7 color-primary fontAvenirBold">
                      월간 11,000원
                    </div>
                    <div className="h7 color-primary fontAvenirBold">
                      연간 <span className="del-txt">112,000원</span> →
                      110,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bothSpace mb10">
        <h5 className="weight500">전체 이용권</h5>
      </div>

      <div className="">
        <div className="horiz-item cupon nouse">
          <div className="horiz-inner">
            <div className="horiz-top">
              <div
                className="cupon-img mr12"
                style={{ backgroundImage: `url(${nocupon})` }}
              ></div>
              <div className="">
                <div className="d-flex y-center">
                  <h6 className="weight500 mr3">한 이용권</h6>
                  <div className="discount-box">29%할인가</div>
                </div>
                <div className="cupon-content">
                  <div className="h7 ">월 3개 콘텐츠 무제한 학습</div>
                  <div className="">
                    <div className="h7 color-primary fontAvenirBold">
                      월간 11,000원
                    </div>
                    <div className="h7 color-primary fontAvenirBold">
                      연간 <span className="del-txt">112,000원</span> →
                      110,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horiz-item cupon nouse">
          <div className="horiz-inner">
            <div className="horiz-top">
              <div
                className="cupon-img mr12"
                style={{ backgroundImage: `url(${iconplus})` }}
              ></div>
              <div className="">
                <div className="d-flex y-center">
                  <h6 className="weight500 mr3">무제한 이용권</h6>
                  <div className="discount-box">29%할인가</div>
                </div>
                <div className="cupon-content">
                  <div className="h7 ">월 3개 콘텐츠 무제한 학습</div>
                  <div className="">
                    <div className="h7 color-primary fontAvenirBold">
                      월간 11,000원
                    </div>
                    <div className="h7 color-primary fontAvenirBold">
                      연간 <span className="del-txt">112,000원</span> →
                      110,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horiz-item cupon nouse">
          <div className="horiz-inner">
            <div className="horiz-top">
              <div
                className="cupon-img mr12"
                style={{ backgroundImage: `url(${iconunlimit})` }}
              ></div>
              <div className="">
                <div className="d-flex y-center">
                  <h6 className="weight500 mr3">무제한 이용권</h6>
                  <div className="discount-box">29%할인가</div>
                </div>
                <div className="cupon-content">
                  <div className="h7 ">월 3개 콘텐츠 무제한 학습</div>
                  <div className="">
                    <div className="h7 color-primary fontAvenirBold">
                      월간 11,000원
                    </div>
                    <div className="h7 color-primary fontAvenirBold">
                      연간 <span className="del-txt">112,000원</span> →
                      110,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
