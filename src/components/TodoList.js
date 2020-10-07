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
              <button className="default-icon">
                <img src={icCirCheck} alt="" />
              </button>
            ) : (
              <button className="default-icon">
                <img src={icCirArrow} alt="" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
