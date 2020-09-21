import React from "react";
import { icCirArrow, icCirCheck } from "components/ImgUtils";

export default function TodoList(props) {
  const { isComplete } = props;
  return (
    <div className="todo-wrap">
      <div className="todo-inner">
        {[1, 2, 3].map((item) => (
          <div className="todo-con">
            <div className="">
              <h5 className="small">학습 할 콘텐츠 고르기 10p</h5>
              <p className="h7 color-gray">오늘 읽을 콘텐츠는 1개 입니다</p>
            </div>
            {isComplete ? (
              <div className="default-icon">
                <img src={icCirCheck} alt="" />
              </div>
            ) : (
              <div className="default-icon">
                <img src={icCirArrow} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
