import React from "react";
import StackHeader from "components/StackHeader";

export default function Notice(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace pt29">
        <h3 className="weight500 stack-content">공지사항</h3>
      </div>

      <div className="item-list-wrap no-arr all-border">
        <div className="item-list-con">
          <div className="item-list-row no-flex">
            <a href="#">
              <div className="d-flex y-center">
                <h5 className="small weight500 new-notice one-line-elis">
                  1.1.2 버전1.1.2 버전1.1.2 버전1.1.2 버전1.1.2 버전1.1.2 버전
                </h5>
                <div className="blue-new" />
              </div>
              <div className="h7 color-gray">20.08.19</div>
            </a>
          </div>
          <div className="item-list-row">
            <a href="#">
              <div className="d-flex direction-column">
                <h5 className="small weight500 new-notice one-line-elis">
                  1.1.2 버전 업데이트 안내1.1.2 버전 업데이트 안내1.1.2 버전
                  업데이트 안내1.1.2 버전 업데이트 안내
                </h5>
                <div className="h7 color-gray">20.08.19</div>
              </div>
            </a>
          </div>
          <div className="item-list-row">
            <a href="#">
              <div className="d-flex direction-column">
                <h5 className="small weight500 new-notice one-line-elis">
                  1.1.2 버전 업데이트 안내
                </h5>
                <div className="h7 color-gray">20.08.19</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
