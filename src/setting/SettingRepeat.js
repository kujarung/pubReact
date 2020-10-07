import React from 'react';
import StackHeader from 'components/StackHeader';
import { icCirArrow } from 'components/ImgUtils';
import BackBtn from 'components/BackBtn';

export default function SettingRepeat(props) {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt29 mb40">
        <h3 className="weight500">복습주기 설정</h3>
      </div>

      <div className="mb15 bothSpace">
        <h5 className="weight500">복습주기 설정</h5>
      </div>

      <div className="bothSpace">
        <div className="shadow-box mb30">
          <div className="repeact-con">
            <div className="repeact-row no-row">
              <div className="d-flex y-center">
                <h5 className="small mr10">복습 횟수</h5>
                <div className="h7 color-gray">총 3회 학습</div>
              </div>

              <button className="">
                <img src={icCirArrow} alt="" style={{ width: '30px' }} />
              </button>
            </div>
          </div>
        </div>

        <div className="mb15 bothSpace">
          <h5 className="weight500">복습주기 설정</h5>
        </div>

        <div className="shadow-box">
          <div className="repeact-con">
            <div className="repeact-row">
              <div className="d-flex y-center">
                <h5 className="small mr10">1회차</h5>
                <div className="h7 color-gray">+1일 후 복습</div>
              </div>

              <button className="">
                <img src={icCirArrow} alt="" style={{ width: '30px' }} />
              </button>
            </div>

            <div className="repeact-row">
              <div className="d-flex y-center">
                <h5 className="small mr10">2회차</h5>
                <div className="h7 color-gray">+2일 후 복습</div>
              </div>

              <button className="">
                <img src={icCirArrow} alt="" style={{ width: '30px' }} />
              </button>
            </div>

            <div className="repeact-row">
              <div className="d-flex y-center">
                <h5 className="small mr10">3회차</h5>
                <div className="h7 color-gray">+3일 후 복습</div>
              </div>

              <button className="">
                <img src={icCirArrow} alt="" style={{ width: '30px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pos-bottom">
        <BackBtn btnTxt={'초기값으로 설정'} />
      </div>
    </div>
  );
}
