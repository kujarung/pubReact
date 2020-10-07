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
          <div className="d-flex x-end">
            <button className=" h7 color-gray mb3">전체삭제</button>
          </div>

          <div className="mb22">
            <div className="search-row d-flex x-eq y-center">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '20px' }} />
                </div>
                <h6 className="">가나다</h6>
              </div>

              <button className="d-flex y-center he20">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </button>
            </div>

            <div className="search-row d-flex x-eq y-center">
              <div className="d-flex y-center">
                <div className=" mr10">
                  <img src={resent} alt="" style={{ width: '20px' }} />
                </div>
                <h6 className="">climate change</h6>
              </div>

              <button className="d-flex y-center he20">
                <img src={grayX} alt="" style={{ width: '12px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
