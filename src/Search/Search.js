import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import SerchInput from '../components/SerchInput';
import { resent, grayX } from 'components/ImgUtils';
export default function Search(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29 mb15">
        <div className="mb3">
          <div className="mb10">
            <SerchInput placeholder="검색어를 입력해주세요" hasX />
          </div>

          <div className="d-flex x-end h7 color-gray mb3">전체삭제</div>

          <div className="mb22">
            <div className="search-row d-flex x-eq">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '21px' }} />
                </div>
                <div className="">climate change</div>
              </div>

              <div className="">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </div>
            </div>

            <div className="search-row d-flex x-eq">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '21px' }} />
                </div>
                <div className="">climate change</div>
              </div>

              <div className="">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </div>
            </div>

            <div className="search-row d-flex x-eq">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '21px' }} />
                </div>
                <div className="">climate change</div>
              </div>

              <div className="">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </div>
            </div>

            <div className="search-row d-flex x-eq">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '21px' }} />
                </div>
                <div className="">climate change</div>
              </div>

              <div className="">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </div>
            </div>

            <div className="search-row d-flex x-eq">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '21px' }} />
                </div>
                <div className="">climate change</div>
              </div>

              <div className="">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
