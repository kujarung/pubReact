import React from "react";
import SNSBtn from "components/SNSBtn";
import Checkbox from "components/Checkbox";
import logoImg from "../assets/img/logo-img.png";
import BackBtn from "components/BackBtn";

export default function Signup() {
  const snsList = ["naver", "kakako", "fb", "google"];
  const checkboxList = [
    { id: 1, txt: "전체 동의하기" },
    {
      id: 2,
      txt: "[필수] 서비스 이용약관 >",
    },
    {
      id: 3,
      txt: "[필수] 개인정보 처리방침 >",
    },
    {
      id: 4,
      txt: "[선택] 마케팅 메시지 수신 동의 (이메일) >",
    },
    {
      id: 5,
      txt: "[선택] 마케팅 메시지 수신 동의 (SMS) >",
    },
    {
      id: 6,
      txt: "[선택] 마케팅 메시지 수신 동의 (푸쉬알림) >",
    },
  ];
  return (
    <>
      <div className="popup-wrap">
        <div className="inner-pop">
          <div className="pl10 pr10">
            <div className="mb43">
              <h4 className="small weight500">약관 및 동의</h4>
            </div>
            <div className="checkbox-wrap">
              {checkboxList.map((checkbox) => (
                <Checkbox checkbox={checkbox} />
              ))}
            </div>
          </div>

          <div className="">
            <BackBtn btnTxt="동의하고 계속하기" />
          </div>
        </div>
      </div>

      <div className="h-100vh">
        <div className="bothSpace">
          <div className="mb84 pt77">
            <div className="img-logo big tc">
              <img src={logoImg} alt="logo-img" />
            </div>
          </div>

          <div className="mb29">
            <h2 className="fontAvenirBold">Sign In</h2>
          </div>
          <div className="mb33">
            <h6 className="weight100">
              읽고, 생각하고 성장하여 <span className="weight500">60%</span>의
              <br />
              장벽을 뛰어 넘는 <span className="weight500">리딩퍼센트</span>에
              초대합니다.
            </h6>
          </div>

          <div className="sns-btn-list">
            {snsList.map((sns) => (
              <div className="mb16">
                <SNSBtn snsName={sns} />
              </div>
            ))}
          </div>
          <div className="h7 weight300 tc">
            아직 리딩퍼센트의 회원이 아니신가요?{" "}
            <span className="primary-underline color-primary">
              그냥 둘러보기
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
