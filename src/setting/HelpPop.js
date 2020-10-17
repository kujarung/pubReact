import React from "react";
import StackHeader from "components/StackHeader";
import { blackX } from "components/ImgUtils";
import BackBtn from "components/BackBtn";

export default function HelpPop(props) {
  return (
    <>
      <div className="popup-wrap">
        <div className="inner-pop static static-small">
          <button className="pop-x-btn-con tpye2">
            <img
              src={blackX}
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
          </button>
          <div className="title">
            <h4 className="small weight500">초기화 확인</h4>
          </div>
          <div className="content">
            <h6 className="weight400">
              모든 도움말 상자를
              <br />
              다시 보시곘습니까?
            </h6>
          </div>

          <div className="d-flex x-end ontinue-btn">
            <BackBtn btnTxt="확인" isSmall />
          </div>
        </div>
      </div>

      <div className="no-scroll">
        <StackHeader />
        <div className="bothSpace mt29 mb40">
          <h3 className="weight500">설정</h3>
        </div>

        <div className="item-list-wrap">
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
              <p className="txt color-gray mr25">2020.01.01</p>
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
      </div>
    </>
  );
}
