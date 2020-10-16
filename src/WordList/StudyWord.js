import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import { avatar, tempback1, tempback2 } from 'components/ImgUtils';
import RenderTab from 'components/RenderTab';
import WrongAnserList from 'components/WrongAnserList';
import BackBtn from 'components/BackBtn';
import ImageCardItem from '../components/ImageCardItem';
import { hand } from '../components/ImgUtils';

export default function StudyWord(props) {
  const wrongAnserList = [
    {
      id: 1,
      contentTxt:
        'Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…',
      img: hand,
    },
  ];

  const [selectTab, setSelectTab] = useState([
    { id: 112, title: '예문', active: true },
    { id: 224, title: '단어뜻', active: false },
  ]);

  const clickTab = (id) => {
    const resultTab = selectTab.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
    );
    setSelectTab(resultTab);
  };
  const imgList = [
    {
      id: 'xcvxcvfgdsvcb',
      imgPath: hand,
      content:
        'At least 50 people burned to death in a bus collision in Ghana ',
    },
  ];
  return (
    <>
      <StackHeader />
      <div className="mt29 mb20 bothSpace">
        <h3 className="weight500">단어 학습</h3>
      </div>
      <div className="mb50">
        <div className="pos-rel">
          <ImageCardItem
            hasInfo
            round={'norounded'}
            key={imgList[0].id}
            content={imgList[0].content}
            imgPath={imgList[0].imgPath}
          />
        </div>
      </div>
      <div className="title-container bothSpace mb35 mt30">
        <h5 className="weight500">오답 단어 목록</h5>
        <p className="smallFont weight500 primary-color">27개</p>
      </div>
      <div className="mb20">
        <RenderTab tabList={selectTab} clickTab={clickTab} isFull={true} />
      </div>

      <div className="">
        <WrongAnserList wrongAnserList={wrongAnserList} isProbleam />
      </div>

      <div className="bothSpace mb17">
        <BackBtn btnTxt="학습 시작하기" />
      </div>
    </>
  );
}
