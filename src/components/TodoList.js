import React from 'react';
import { icCirArrow, icCirCheck } from 'components/ImgUtils';

export default function TodoList(props) {
  const { isComplete, todoList } = props;
  return (
    <div className="todo-wrap">
      <div className="todo-inner">
        {todoList.map((item, index) => (
          <div className="todo-con" key={index}>
            <div className="">
              <h5 className="small">{item.title}</h5>
              <p className="h7 color-gray">{item.desc}</p>
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
