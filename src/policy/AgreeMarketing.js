import React, { useState } from "react";
import StackHeader from "components/StackHeader";

export default function AgreeMarketing(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29 mb15">
        <div className="mb30">
          <h3 className="weight500">마케팅 메시지 수신 동의 </h3>
        </div>

        <div className="mb25">
          <h5 className="small weight500">1.1.2 버전 업데이트 안내</h5>
          <div className="h7 color-gray">2019.12.30 개정</div>
        </div>
        <div className="h7 color-gray">
          리딩퍼센트가 제공하는 광고/마케팅 정보를 메시지로 받습니다.
          <br />
          <br />
          * 리딩퍼센트알림은 리딩퍼센트가 직접 운영하는 통합서비스들의 소식과
          혜택, 쿠폰 등 유용한 정보를 제공하는 것을 통칭합니다.
          <br />
          <br />
          * 리딩퍼센트알림 메시지를 받고 싶지 않은 경우, 언제든지 [알림설정]에서
          설정할 수 있습니다.
          <br />
          * 추후 리딩퍼센트알림에 새로운 항목이 추가될 경우, 본 동의를 한
          사용자는 자동으로 해당 항목에 관한 메시지를 수신할 수 있게 됩니다.
          <br />
          * 본 동의 시점에 리딩퍼센트를 아직 사용하지 않은 사용자는 추후
          리딩퍼센트 가입이 완료될 경우 자동으로 리딩퍼센트알림 메세지가
          수신됩니다.
          <br />
        </div>
      </div>
    </>
  );
}
