import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import AnserBtn from 'components/AnserBtn';

export default function Pretest1() {
  const [anserList, setAnserList] = useState([
    {
      id: '1',
      btnTxt: 'injure (해치다)',
      active: false,
    },
    {
      id: '2',
      btnTxt: 'start (시작하다)',
      active: true,
    },
    {
      id: '3',
      btnTxt: 'eat (먹다)',
      active: false,
    },
    {
      id: '4',
      btnTxt: 'desk (책상)',
      active: false,
    },
    {
      id: '5',
      btnTxt: 'dog (개)',
      active: false,
    },
  ]);

  const clickBtn = (id) => {
    const result = anserList.map((anser) =>
      anser.id === id
        ? { ...anser, active: true }
        : { ...anser, active: false },
    );
    setAnserList(result);
  };

  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="bothSpace pt21">
        <div className="bottom-small-line mb25">
          <h2 className="small fontAvenirBold">Q1</h2>
        </div>

        <div className="">
          <h5 className="weight500 line-h30">
            There is a way to <span className="inner-empty" />
            with an English children’s book.
          </h5>
        </div>
      </div>
      <div className="pos-bottom long">
        {anserList.map((anser) => (
          <AnserBtn
            click={() => clickBtn(anser.id)}
            key={anser.id}
            btnTxt={anser.btnTxt}
            active={anser.active}
          />
        ))}
      </div>
    </div>
  );
}
