import React from "react";
import SNSBtn from "components/SNSBtn";
import { logoImg } from "components/ImgUtils";

export default function Login() {
  const snsList = ["naver", "kakako", "fb", "google"];
  return (
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
            <div className="mb16" key={sns}>
              <SNSBtn snsName={sns} />
            </div>
          ))}
        </div>
        <div className="h7 weight300 tc">
          아직 리딩퍼센트의 회원이 아니신가요?{" "}
          <span className="primary-underline color-primary">그냥 둘러보기</span>
        </div>
      </div>
    </div>
  );
}
