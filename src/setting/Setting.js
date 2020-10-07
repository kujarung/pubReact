import React from 'react';
import StackHeader from 'components/StackHeader';

export default function Setting(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29 mb40">
        <h3 className="weight500">설정</h3>
      </div>

      <div className="item-list-wrapap">
        <div className="item-list-con">
          <div className="setting-title">설정</div>
          <div className="item-list-row">
            <p className="txt">내 정보 설정</p>
          </div>
          <div className="item-list-row">
            <p className="txt">알림 설정</p>
          </div>
          <div className="item-list-row">
            <p className="txt">반복주기 설정</p>
          </div>
          <div className="item-list-row">
            <p className="txt">도움말 다시보기</p>
          </div>
        </div>

        <div className="item-list-con">
          <div className="setting-title">이용안내</div>
          <div className="item-list-row">
            <p className="txt">공지사항</p>
          </div>
          <div className="item-list-row">
            <p className="txt">이벤트</p>
          </div>
          <div className="item-list-row">
            <p className="txt">자주 묻는 질문</p>
          </div>
          <div className="item-list-row">
            <p className="txt">이메일 문의</p>
          </div>
        </div>

        <div className="item-list-con">
          <div className="setting-title">공유</div>
          <div className="item-list-row">
            <p className="txt">지인과 리딩퍼센트 같이하기</p>
          </div>
          <div className="item-list-row">
            <p className="txt">앱스토어 평점 남기기</p>
          </div>
        </div>

        <div className="item-list-con">
          <div className="setting-title">앱정보</div>
          <div className="item-list-row">
            <p className="txt">버전</p>
            <h7 className="txt right color-gray mr25 ">2020.01.01</h7>
          </div>
          <div className="item-list-row">
            <p className="txt">서비스 이용약관</p>
          </div>
          <div className="item-list-row">
            <p className="txt">개인정보 처리방침</p>
          </div>
          <div className="item-list-row">
            <p className="txt">마케팅 메시지 수신 동의</p>
          </div>
          <div className="item-list-row">
            <p className="txt">서비스 탈퇴</p>
          </div>
        </div>
      </div>
    </>
  );
}
