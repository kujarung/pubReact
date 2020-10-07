import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import Checkbox from 'components/Checkbox';
import BackBtn from 'components/BackBtn';
import {
  arrLeft,
  arrRight,
  people1,
  people2,
  people3,
} from 'components/ImgUtils';

export default function Ranking(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29">
        <div className="d-flex x-eq y-center mb25">
          <div className="">
            <img
              src={arrLeft}
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
          </div>
          <div className="">
            <h3 className="weight500">2020년 4월</h3>
          </div>
          <div className="">
            <img
              src={arrRight}
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </div>

        <div className="desc-info-box mb60">
          <h6 className="color-white weight500">나의 순위</h6>
          <h4 className="color-white fontAvenirBold">
            589
            <span className="h7">위</span>
          </h4>
        </div>

        <div className="top-ranking-con mb30">
          <div className="top-ranking-card two">
            <div className="mb10">
              <img src={people1} alt="" style={{ width: '58px' }} />
            </div>

            <div className="tc">
              <h6 className="weight500">닐라닐라</h6>
              <div className="h7 color-gray">58,325</div>
            </div>
          </div>

          <div className="top-ranking-card one">
            <div className="mb10">
              <img src={people2} alt="" style={{ width: '58px' }} />
            </div>

            <div className="tc">
              <h6 className="weight500">민초</h6>
              <div className="h7 color-gray">58,325</div>
            </div>
          </div>

          <div className="top-ranking-card three">
            <div className="mb10">
              <img src={people3} alt="" style={{ width: '58px' }} />
            </div>

            <div className="tc">
              <h6 className="weight500">바닐라</h6>
              <div className="h7 color-gray">58,325</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="other-ranking-list">
            {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((rank) => (
              <div className="ranking-list-item">
                <div className="ranking-num">
                  <h6 className="color-primary weight500">{rank}위</h6>
                </div>

                <div className="d-flex y-center ranking-content">
                  <div className="mr6">
                    <img src={people1} alt="" style={{ width: '39px' }} />
                  </div>

                  <h6 className="weight500">닐라 닐라</h6>
                </div>

                <div className="h7 color-gray ranking-score weight500">
                  58,325
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
