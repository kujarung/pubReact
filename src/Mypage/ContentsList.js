import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import { avatar, tempback1, tempback2 } from 'components/ImgUtils';
import RenderTab from 'components/RenderTab';
import SerchInput from 'components/SerchInput';
import DeletableList from 'components/DeletableList';
export default function ContentsList(props) {
  const deletableList = [
    {
      id: 1,
      contentTxt:
        'Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…',
      img: tempback1,
    },
    {
      id: 2,
      contentTxt:
        'Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…',
      img: tempback2,
      isDelete: true,
    },
    {
      id: 3,
      contentTxt: 'Mauritius Copes With Copes WithCopes WithCopes With',
      img: avatar,
    },
  ];

  const [selectTab, setSelectTab] = useState([
    { id: 112, title: '학습 중인 콘텐츠', active: true },
    { id: 224, title: '학습 완료 콘테츠', active: false },
  ]);

  const clickTab = (id) => {
    const resultTab = selectTab.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
    );
    setSelectTab(resultTab);
  };

  return (
    <>
      <StackHeader />
      <div className="bothSpace pt20 mb30">
        <SerchInput hasX={true} placeholder="검색어를 입력해주세요" />
      </div>
      <div className="title-container bothSpace mb35">
        <h3 className="weight500">컨텐츠 목록</h3>
        <p className="smallFont weight500 primary-color">27개</p>
      </div>
      <div className="mb20">
        <RenderTab tabList={selectTab} clickTab={clickTab} isFull={true} />
      </div>

      <div className="">
        <DeletableList deletableList={deletableList} />
      </div>
    </>
  );
}
