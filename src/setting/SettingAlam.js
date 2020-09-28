import React from 'react';
import StackHeader from 'components/StackHeader';
import Swich from 'components/Swich';

export default function SettingAlam(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29 mb40">
        <h3 className="weight500">알림 설정</h3>
      </div>

      <div className="item-list-wrap no-arr">
        <div className="item-list-con">
          <div className="setting-title">푸쉬알림</div>
          <div className="item-list-row">
            <p className="txt">
              공지/이벤트
              <p className="h7 color-gray mt6">
                공지/이벤트 정보를 푸쉬 알림으로 받을 수 있습니다.
              </p>
            </p>
            <Swich active />
          </div>

          <div className="item-list-row inactive">
            <p className="txt">
              반복주기 알림
              <p className="h7 color-gray mt6">
                반복주기가 되면 푸쉬 알림으로 받을 수 있습니다.
              </p>
            </p>
            <Swich />
          </div>

          <div className="item-list-row inactive">
            <p className="txt">
              야간 알림
              <p className="h7 color-gray mt6">
                9시 이후에도 푸쉬 알림 수신에 동의합니다.
              </p>
            </p>
            <Swich />
          </div>
        </div>

        <div className="item-list-con">
          <div className="setting-title">마케팅 메시지 수신 동의</div>
          <div className="item-list-row inactive">
            <p className="txt">
              이메일
              <p className="h7 color-gray mt6">
                추천 및 이벤트 소식을 받습니다.
              </p>
            </p>
            <Swich />
          </div>

          <div className="item-list-row">
            <p className="txt">
              SMS 알림
              <p className="h7 color-gray mt6">
                문자 메시지로 소식을 받습니다.
              </p>
            </p>
            <Swich active />
          </div>

          <div className="item-list-row">
            <p className="txt">
              푸시 알림
              <p className="h7 color-gray mt6">
                푸시 알림으로 이벤트/마케팅 소식을 받습니다.
              </p>
            </p>
            <Swich active />
          </div>
        </div>
      </div>
    </>
  );
}
