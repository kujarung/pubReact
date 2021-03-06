import React from "react";
import StackHeader from "components/StackHeader";
import Checkbox from "../components/Checkbox";
import BackBtn from "components/BackBtn";
import { icRest, blackX } from "components/ImgUtils";

export default function WithdrawalPop(props) {
  return (
    <>
      <div className="popup-wrap">
        <div className="inner-pop bottom-small static static-small">
          <button className="pop-x-btn-con tpye2">
            <img
              src={blackX}
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
          </button>
          <div className="title">
            <h4 className="small weight500">탈퇴 확인</h4>
          </div>
          <div className="content">
            <h6 className="weight400">
              정말 리딩퍼센트에서 탈퇴 하시겠습니까?
            </h6>
          </div>

          <div className="d-flex x-end continu-btn">
            <BackBtn btnTxt="확인" isGray />
          </div>
        </div>
      </div>
      <div className="h-100vh">
        <StackHeader />
        <div className="bothSpace pt29 mb30">
          <h3 className="weight500 stack-content">회원 탈퇴</h3>
        </div>

        <div className="bothSpace mb20">
          <div className="rest-icon mb10">
            <img src={icRest} alt="ic-rest" />
          </div>

          <h6 className="color-gray line-h27">
            리딩퍼센트를 탈퇴하면 계정 정보 및 리딩퍼센트 서비스 이용기록 등
            모든 정보가 삭제됩니다.
            <br />
            단, 리딩퍼센트 탈퇴 시 금전적인 문제가 발생할 수 있거나, 타인의
            서비스 이용에 영향을 줄 수 있는 경우에는 바로 탈퇴할 수 없고, 해당
            서비스를 해지하거나 설정을 변경하신 후 리딩퍼센트를 탈퇴하실 수
            있습니다.
          </h6>
        </div>

        <div className="pos-bottom middle">
          <div className="mb20">
            <Checkbox
              checkbox={{ id: 1, txt: "모든 내용을 삭제하는 것에 동의합니다." }}
            />
          </div>

          <BackBtn btnTxt={"탈퇴하기"} isGray />
        </div>
      </div>
    </>
  );
}
