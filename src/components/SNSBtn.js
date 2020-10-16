import React from "react";
import {
  iconNaver,
  iconKakao,
  iconFacebook,
  iconGoogle
} from "components/ImgUtils";

export default function SNSBtn(props) {
  const { snsName } = props;
  let txtTitle = "";
  let iconImg = "";
  if (snsName === "naver") {
    txtTitle = "네이버로 시작";
    iconImg = iconNaver;
  } else if (snsName === "fb") {
    txtTitle = "페이스북으로 시작";
    iconImg = iconFacebook;
  } else if (snsName === "google") {
    txtTitle = "구글로 시작";
    iconImg = iconGoogle;
  } else if (snsName === "kakako") {
    txtTitle = "카카오로 시작";
    iconImg = iconKakao;
  }
  return (
    <input
      type="button"
      className={`btn-con ${snsName} sns`}
      style={{ backgroundImage: `url(${iconImg})` }}
      value={txtTitle}
    />
  );
}
