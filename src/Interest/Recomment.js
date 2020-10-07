import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import RenderTab from 'components/RenderTab';
import HorizList from 'components/HorizList';
import BackBtn from 'components/BackBtn';
import {
  icRest,
  tempback1,
  tempback2,
  tempbak2,
  tempbak1,
} from 'components/ImgUtils';

export default function Recomment() {
  const [tabList, setTabList] = useState([
    { id: 1, title: '정치', active: true },
    { id: 2, title: '경제', active: false },
    { id: 3, title: '사회', active: false },
    { id: 4, title: '문화', active: false },
    { id: 5, title: '예술', active: false },
    { id: 6, title: 'IT', active: false },
    { id: 7, title: 'Smart', active: false },
    { id: 8, title: '언택트', active: false },
  ]);

  const horzList = [
    {
      id: 112,
      imgPath: tempbak2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'hashTag',
    },
    {
      id: 2321,
      imgPath: tempbak1,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'hashTag',
    },
    {
      id: 3,
      imgPath: tempback1,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'hashTag',
    },
  ];
  const clickTab = (id) => {
    const resultTab = tabList.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
    );
    setTabList(resultTab);
  };
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt21 mb22">
        <div className="mb25">
          <h2 className="small fontAvenirBold">Result</h2>
        </div>
        <div>
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              약 <span className="weight500">42%</span>,의 콘텐츠들 중에서
              <br />
              닉네임님께서{' '}
              <span className="weight500">좋아하실 만한 학습 콘텐츠</span>를
              골라봤어요. <br />이 중 하나를 선택해서 학습을 시작해 보세요.
            </h6>
          </div>
        </div>
      </div>

      <div className="tab-wrap">
        <div className="bothSpace mb23">
          <h5 className="weight500">추천 콘텐츠</h5>
        </div>

        <RenderTab tabList={tabList} clickTab={clickTab} />
        {<HorizList horzList={horzList} />}
      </div>

      <div className="bothSpace">
        <div className="text-box mb20">
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <h6 className="weight100 line-h26">
            혹시 마음에 들지 않으세요?
            <br />
            그렇다면 <span className="weight500">홈 화면</span>에서 매일
            업데이트 되는
            <br />
            다양한 콘텐츠를 <span className="weight500">직접 골라보세요.</span>
            <br />
          </h6>
        </div>
        <div className="mb14">
          <BackBtn btnTxt="홈화면으로 가기" />
        </div>
      </div>
    </>
  );
}
