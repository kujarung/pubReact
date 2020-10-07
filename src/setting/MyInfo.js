import React from 'react';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import { camera, profile, pen } from 'components/ImgUtils';

export default function MyInfo() {
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace mt29 mb15">
        <h3 className="weight500">내 정보 설정</h3>
      </div>

      <div className="bothSpace">
        <div className="shadow-box pt30 pb25">
          <div className="mb20 tc">
            <div className="profile-con">
              <img src={profile} alt="" style={{ width: '100px' }} />
            </div>
          </div>

          <div className="d-flex xy-center mb45 ">
            <h6 className="mr6 weight500">닐라닐라</h6>
            <div className="">
              <img src={pen} alt="" style={{ width: '12px' }} />
            </div>
          </div>

          <div className="pl30 pr30">
            <div className="member-row">
              <h6>회원유형</h6>
              <div className="h7 color-gray">카카오톡</div>
            </div>
            <div className="member-row">
              <h6>아이디</h6>
              <div className="h7 color-gray">123123</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pos-bottom">
        <BackBtn btnTxt={'수정'} />
      </div>
    </div>
  );
}
