import React from 'react';
import StackHeader from 'components/StackHeader';
import { icCirArrow, blackX } from 'components/ImgUtils';
import BackBtn from 'components/BackBtn';

export default function SettingRepeatPop(props) {
  return (
    <>
      <div className="popup-wrap">
        <div className="inner-pop">
          <div className="pop-x-btn-con tpye2">
            <img
              src={blackX}
              alt=""
              style={{ width: '16px', height: '16px' }}
            />
          </div>
          <div className="mb38">
            <h4 className="small weight500">확인</h4>
          </div>
          <div className="mb38">
            <h6 className="weight400">
              현재 설정이 54% 기본 값과 다릅니다.
              <br />
              정말 변경 하시겠습니까?
            </h6>
          </div>

          <div className="d-flex x-end">
            <BackBtn btnTxt="확인" isSmall />
          </div>
        </div>
      </div>
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

                <div className="">
                  <img src={icCirArrow} alt="" style={{ width: '30px' }} />
                </div>
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

                <div className="">
                  <img src={icCirArrow} alt="" style={{ width: '30px' }} />
                </div>
              </div>

              <div className="repeact-row">
                <div className="d-flex y-center">
                  <h5 className="small mr10">2회차</h5>
                  <div className="h7 color-gray">+2일 후 복습</div>
                </div>

                <div className="">
                  <img src={icCirArrow} alt="" style={{ width: '30px' }} />
                </div>
              </div>

              <div className="repeact-row">
                <div className="d-flex y-center">
                  <h5 className="small mr10">3회차</h5>
                  <div className="h7 color-gray">+3일 후 복습</div>
                </div>

                <div className="">
                  <img src={icCirArrow} alt="" style={{ width: '30px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pos-bottom">
          <BackBtn btnTxt={'초기값으로 설정'} />
        </div>
      </div>
    </>
  );
}
