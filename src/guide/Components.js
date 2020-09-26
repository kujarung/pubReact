import React, { useState } from 'react';
import AnserBtn from '../components/AnserBtn';
import BackBtn from '../components/BackBtn';
import Barchart from '../components/Barchart';
import CardList from '../components/CardList';
import Checkbox from '../components/Checkbox';
import CircleProgress from '../components/CircleProgress';
import {
  tempbak2,
  tempbak1,
  tempback1,
  tempback2,
  base,
  base2,
  base3,
} from '../components/ImgUtils';
import HorizList from '../components/HorizList';
import ImageCardItem from '../components/ImageCardItem';
import MultiCircleProgress from '../components/MultiCircleProgress';
import RenderTab from '../components/RenderTab';
import SNSBtn from '../components/SNSBtn';
import SerchInput from '../components/SerchInput';
import TodoList from '../components/TodoList';
import VerticalList from '../components/VerticalList';
import Steps from '../components/Steps';
import WordList from '../components/WrongAnserList';
import Swich from '../components/Swich';
import HaxTxt from '../components/HaxTxt';
import BarWidthLineChart from '../components/BarWidthLineChart';
import DotSeletor from '../components/DotSeletor';
import CustomCalendar from '../components/CustomCalendar';
import SqareTab from '../components/SqareTab';
import Accordion from '../components/Accordion';
import BottomSheet from '../components/BottomSheet';
import HorizontalBar from '../components/HorizontalBar';

export default function Components() {
  const verticalList = [
    {
      id: 1,
      imgPath: tempback1,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
    },
    {
      id: 2,
      imgPath: tempback2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
    },
    {
      id: 3,
      imgPath: tempback1,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
    },
    {
      id: 4,
      imgPath: tempback2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
    },
  ];

  const snsList = ['naver', 'kakako', 'fb', 'google'];
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

  const [tabList2, setTabList2] = useState([
    { id: 1, title: '활동지수', active: true },
    { id: 2, title: '마이퍼센트', active: false },
    { id: 3, title: '리뷰', active: false },
  ]);

  const clickTab2 = (id) => {
    const resultTab = tabList2.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
    );
    setTabList2(resultTab);
  };

  const clickTab = (id) => {
    const resultTab = tabList.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
    );
    setTabList(resultTab);
  };
  const imgList = [
    {
      id: 'abc1',
      imgPath: base,
      content: 'At least 50 people burned to death in a bus collision in Ghana',
    },
    {
      id: 'xcvxcv',
      imgPath: base2,
      content: 'At least 50 people burned to death in a bus collision in Ghana',
    },
    {
      id: 'xcvxcvfgdsvcb',
      imgPath: base3,
      content:
        'At sdfdsleast 50 people burned to vxcvdeath in a buzxcvzxcs colvlision in Ghana',
    },
  ];
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
    {
      id: 4,
      imgPath: tempback2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'hashTag',
    },
  ];
  const horzListHash = [
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
    {
      id: 4,
      imgPath: tempback2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'hashTag',
    },
  ];

  const horzListEmpty = [
    {
      id: 112,
      imgPath: tempbak2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'empty',
    },
    {
      id: 2321,
      imgPath: tempbak1,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'empty',
    },
    {
      id: 3,
      imgPath: tempback1,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'empty',
    },
    {
      id: 4,
      imgPath: tempback2,
      date: 'Apr 18, 2020',
      content:
        'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
      type: 'empty',
    },
  ];

  const cardList1 = [
    {
      id: 11,
      percent: '40%',
      title: '상위 40%',
      desc: '당신의 순위를 확인하세요!',
    },
    {
      id: 12,
      percent: '100%',
      title: '출석률',
      desc: '출석 점수를 획득하세요!',
    },
    {
      id: 13,
      percent: '82%',
      title: '도전과제 달성률',
      desc: '다음 과제에 도전하세요!',
    },
  ];

  return (
    <div className="over-hidden">
      <section className="mt50 mb50 guide-border">
        <h6 className="mb30 tc">보더만 있는 버튼</h6>
        <div className="">
          <AnserBtn btnTxt={'텍스트'} active />
        </div>
      </section>

      <section className="mt50 mb50 guide-border">
        <h6 className="mb30 tc">체크 버튼이 있는 것</h6>
        <div className="has-check">
          <AnserBtn click={() => console.log('click')} btnTxt={'텍스트'} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">색이 찬 버튼</h6>
        <div className="">
          <BackBtn btnTxt="홈화면으로 가기" />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">회색 버튼</h6>
        <div className="">
          <BackBtn isGray btnTxt="홈화면으로 가기" />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">회색 버튼</h6>
        <div className="">
          <BackBtn isSmall btnTxt="확인" />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">bar chart</h6>
        <div className="">
          <Barchart
            title={'75450'}
            percentList={[20, 30, 10, 50, 50, 100, 10]}
          />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">card list</h6>
        <div className="">
          <CardList list={cardList1} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">Checkbox</h6>
        <div className="">
          <div className="">
            <Checkbox checkbox={{ id: 2, txt: '' }} />
          </div>
          <div className="">
            <Checkbox checkbox={{ id: 3, txt: '내용이 있네요' }} />
          </div>
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">원형 차트</h6>
        <div className="pos-rel">
          <CircleProgress width="280" percent={42} />
          {/* 원형 차트 설명 */}
          <div className="circle-label-con">
            <div className="circle-label">
              <div className="label-txt big mb4">
                42<span className="per">%</span>
              </div>
              <div className="desc mb14">
                현재 닉네임님은 전체 콘텐츠 중<br />약 20%를 읽을 수 있어요.
              </div>
              <div className="d-flex x-center">
                <div className="tag-item no-margin">
                  <p className="tag-txt color-primary">자세히보기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">세로 리스트</h6>
        <div className="pos-rel">{<HorizList horzList={horzList} />}</div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">세로 리스트 해시태그</h6>
        <div className="pos-rel">{<HorizList horzList={horzListHash} />}</div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">세로 리스트 바텀 제거</h6>
        <div className="pos-rel">{<HorizList horzList={horzListEmpty} />}</div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">이미지 리스트 short</h6>
        <div className="pos-rel">
          <ImageCardItem
            key={imgList[0].id}
            content={imgList[0].content}
            imgPath={imgList[0].imgPath}
          />
        </div>
      </section>

      <section className="mb50 ">
        <div className="pos-rel">
          {imgList.map((imgInfo) => (
            <ImageCardItem
              size={'long'}
              round={'norounded'}
              key={imgInfo.id}
              content={imgInfo.content}
              imgPath={imgInfo.imgPath}
            />
          ))}
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">다중 원형 차트</h6>
        <div className="pos-rel">
          <MultiCircleProgress percent1={90} percent2={5} percent3={5} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">탭 스크롤</h6>
        <div className="pos-rel">
          <RenderTab tabList={tabList} clickTab={clickTab} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">탭 노스크롤</h6>
        <div className="pos-rel">
          <RenderTab tabList={tabList2} clickTab={clickTab2} isFull={true} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">tag item</h6>
        <div className="d-flex">
          <div className="tag-item">
            <p className="tag-txt">item</p>
          </div>

          <div className="tag-item full">
            <p className="tag-txt">item</p>
          </div>

          <div className="tag-item active">
            <p className="tag-txt">item</p>
          </div>

          <div className="tag-item no-margin">
            <p className="tag-txt">item</p>
          </div>

          <div className="tag-item small">
            <p className="tag-txt">item</p>
          </div>

          <div className="tag-item small gray no-margin">
            <p className="tag-txt">item</p>
          </div>
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">SNSBtn</h6>
        <div className="sns-btn-list">
          {snsList.map((sns) => (
            <div className="mb16">
              <SNSBtn snsName={sns} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">SerchInput</h6>
        <div className="sns-btn-list">
          <SerchInput />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">todo list check</h6>
        <div className="sns-btn-list">
          <TodoList isComplete={false} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">todo list no check</h6>
        <div className="sns-btn-list">
          <TodoList isComplete />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">가로 스크롤 리스트</h6>
        <div className="sns-btn-list">
          <VerticalList verticalList={verticalList} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">Steps</h6>
        <div className="sns-btn-list">
          <Steps steps={4} activeStep={3} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">WordList</h6>
        <div className="sns-btn-list">
          <WordList />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">WordList with probleam</h6>
        <div className="sns-btn-list">
          <WordList isProbleam />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">Swich</h6>
        <div className="sns-btn-list">
          <Swich />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">6각형 글씨</h6>
        <div className="sns-btn-list d-flex y-center x-eq">
          <div className="">
            <HaxTxt txt={'1회차'} />
          </div>

          <div className="">
            <HaxTxt txt={'3회차'} isGray />
          </div>
          <div className="">
            <HaxTxt txt={'2회차'} />
          </div>
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">6각형 글씨</h6>
        <div className="sns-btn-list">
          <BarWidthLineChart />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">DotSeletor</h6>
        <div className="sns-btn-list">
          <div className="pt50 pb50 pr50 pl50">
            <div className="d-flex x-end">
              <DotSeletor />
            </div>
          </div>
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">Calendar</h6>
        <div className="sns-btn-list">
          <div className="pt50 pb50 pr50 pl50">
            <div className="d-flex x-end">
              <CustomCalendar />
            </div>
          </div>
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">SqareTab</h6>
        <div className="sns-btn-list pl20 pr20">
          <SqareTab />
        </div>
      </section>
      <section className="mb50 guide-border">
        <h6 className="mb30 tc">Accordion</h6>
        <div className="sns-btn-list pl20 pr20">
          <Accordion />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">HorizontalBar</h6>
        <div className="sns-btn-list">
          <HorizontalBar percent={50} />
        </div>
      </section>

      <section className="mb50 guide-border">
        <h6 className="mb30 tc">HorizontalBar</h6>
        <div className="sns-btn-list pl20 pr20">
          <div className="email-input-con mb30">
            <input type="text" />
          </div>

          <div className="email-select-con mb30">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div className="email-textarea">
            <textarea name="" id=""></textarea>
          </div>

          <div className="attach-con">
            <h6 className="color-gray">첨부파일 추가</h6>
          </div>
        </div>
      </section>

      {/* <BottomSheet /> */}
    </div>
  );
}
