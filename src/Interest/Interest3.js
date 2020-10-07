import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';

export default function Interest3() {
  const [tagList, setTageList] = useState([
    {
      id: 1,
      active: false,
      txt: '균형잡힌 영어 학습',
    },
    {
      id: 2,
      active: false,
      txt: '배경지식 쌓기',
    },
    {
      id: 3,
      active: true,
      txt: '직업 정보 습득',
    },
    {
      id: 4,
      active: true,
      txt: '시험준비',
    },
    {
      id: 5,
      active: true,
      txt: '자녀교육',
    },
    {
      id: 6,
      active: true,
      txt: '미래대비',
    },
    {
      id: 7,
      active: true,
      txt: '취미활동',
    },
    {
      id: 8,
      active: true,
      txt: '여행준비',
    },
    {
      id: 9,
      active: true,
      txt: '승진준비',
    },
  ]);

  const clickTag = (id) => {
    const result = tagList.map((tag) => {
      const { active } = tag;
      if (tag.id === id) {
        return { ...tag, active: !active };
      } else {
        return { ...tag };
      }
    });
    setTageList(result);
  };
  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="pt15 bothSpace">
        <div className="mb36">
          <h5 className="weight500">학습 목표를 알려주세요</h5>
        </div>
        <div className="content-scroll-container">
          {tagList.map((tag) => (
            <div
              className={tag.active ? 'tag-item active' : 'tag-item'}
              key={tag.id}
              onClick={() => clickTag(tag.id)}
            >
              <p className="tag-txt">{tag.txt}</p>
            </div>
          ))}
        </div>
        <div className="pos-bottom">
          <BackBtn btnTxt="다음" />
        </div>
      </div>
    </div>
  );
}
