import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import Checkbox from "components/Checkbox";
import BackBtn from "components/BackBtn";
export default function Subscribing(props) {
  const [selectItem, setSelectItem] = useState({
    one: true,
    two: false,
    three: false
  });

  const clickSelectItem = id => {
    console.log(id);
    Object.keys(selectItem).map(item =>
      item === id ? (selectItem[item] = true) : (selectItem[item] = false)
    );
    console.log(selectItem);
    setSelectItem({ ...selectItem });
  };
  return (
    <>
      <StackHeader />
      <div className="pt29 mb30 title-container bothSpace stack-content">
        <h3 className="weight500">나의 구독</h3>
        <button className="tag-item small no-margin">
          <p className="tag-txt color-primary">할인 쿠폰 등록</p>
        </button>
      </div>

      <div className="bothSpace">
        <div className="subscribe-box mb20">
          <div className="mb20">
            <h5 className="small mb7">쿠폰 이용권 구독</h5>
            <div className="h7 color-gray">
              사용기간 : ~2020.12.30까지
              <br />월 3개 콘텐츠 무제한 학습
            </div>
          </div>

          <div className="cupon-item">
            <div className="d-flex">
              <Checkbox noMargin checkbox={{ id: 1, txt: "", checked: true }} />
              <h6 className="weight400">1주일 무료(쿠폰)</h6>
            </div>
            <div className="d-flex y-end direction-column">
              <h4 className="fontAvenirBold">
                7<span className="h7">일</span>
              </h4>
              <div className="fontAvenirBold small-minus-letter">
                <span className="color-gray del-txt gray">10,000원</span> →{" "}
                <span className="color-primary">0원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-box mb30">
          <div className="mb20">
            <h5 className="small mb7">무제한 이용권 구독</h5>
            <div className="h7 color-gray">모든 기능 무제한 이용</div>
          </div>

          <div className="cupon-item" onClick={() => clickSelectItem("one")}>
            <div className="d-flex">
              <Checkbox
                noMargin
                checkbox={{ id: 3, txt: "", checked: selectItem["one"] }}
              />
              <h6 className="weight400">1개월</h6>
            </div>
            <div className="d-flex y-end direction-column">
              <h4 className="fontAvenirBold">
                7<span className="h7">일</span>
              </h4>
              <div className="fontAvenirBold">
                <span className="del-txt gray color-gray">10,000원</span> →{" "}
                <span className="color-primary">0원</span>
              </div>
            </div>
          </div>

          <div className="cupon-item" onClick={() => clickSelectItem("two")}>
            <div className="d-flex">
              <Checkbox
                noMargin
                checkbox={{ id: 4, txt: "", checked: selectItem["two"] }}
              />
              <h6 className="weight400">3개월 (17% 할인)</h6>
            </div>
            <div className="d-flex y-end direction-column">
              <h4 className="fontAvenirBold">
                30<span className="h7">일</span>
              </h4>
              <div className="fontAvenirBold">
                <span className="color-primary">20,000원</span>
              </div>
            </div>
          </div>

          <div className="cupon-item" onClick={() => clickSelectItem("three")}>
            <div className="d-flex">
              <Checkbox
                noMargin
                checkbox={{ id: 6, txt: "", checked: selectItem["three"] }}
              />
              <h6 className="weight400">12개월 (17% 할인)</h6>
            </div>
            <div className="d-flex y-end direction-column">
              <h4 className="fontAvenirBold">
                180<span className="h7">일</span>
              </h4>
              <div className="fontAvenirBold">
                <span className="color-primary">100,000원</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb30">
          <BackBtn btnTxt="결제하기" />
        </div>
      </div>
    </>
  );
}
