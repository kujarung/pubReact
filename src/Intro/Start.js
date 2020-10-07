import React from 'react';
import BackBtn from 'components/BackBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { logoTxt, logoImg, icRest } from 'components/ImgUtils';

export const Start = () => {
  const Main = () => (
    <div className="h-100vh d-flex y-center x-center">
      <h1 className="logo-txt">
        <img src={logoTxt} alt="logo-txt" />
      </h1>
    </div>
  );

  const Start = () => (
    <div className="h-100vh">
      <div className="pos-logo long tc">
        <div className="img-logo big mb31">
          <img src={logoImg} alt="logo-img" />
        </div>
        <h5 className="fontAvenirBlack color-grayy weight700">
          Just get on a rocket ship with <br />
          Reading Percent!
        </h5>
      </div>
      <div className="pos-bottom long">
        <BackBtn btnTxt="시작하기" />
      </div>
    </div>
  );

  const Intro1 = () => (
    <div className="h-100vh">
      <div className="card-container">
        <h3 className="letter87 weight500 line-h38">
          지금 우리에게 <br />
          가장 필요한 영어 능력은 <br />
          <span className="txt-empasis">읽기</span>,
          <br />
          <span className="txt-empasis">READING%</span> 입니다
          <br />
        </h3>

        <div className="card-bottom-txt">
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              인터넷 영어 <span className="weight500">콘텐츠</span>의 비율은 약{' '}
              <span className="weight500">60%</span> 로<br />
              한국어보다 <span className="weight500">600배</span>나 많아요.
              <br />
              디지털 콘텐츠의 폭발적인 증가로
              <br />
              <span className="weight500">정보</span>의 격차는 더욱 심해지고
              있죠.
              <br />
            </h6>
          </div>
        </div>
      </div>
      <div className="pos-bottom">
        <BackBtn btnTxt="어떻게 하면 되나요?" />
      </div>
    </div>
  );

  const Intro2 = () => (
    <div className="h-100vh">
      <div className="card-container">
        <h3 className="letter87 weight500 line-h38">
          그럼 어떻게 <br />
          <span className="txt-empasis">영어 콘텐츠</span> 습득 능력을 <br />
          향상 시킬 수 있나요 <br />
          <br />
        </h3>

        <div className="card-bottom-txt">
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              <span className="weight500">영어 전문가</span>들은 다양한 원서를{' '}
              <span className="weight500">꾸준히</span>
              <br />
              그리고 <span className="weight500">많이</span> 읽어야 한다고{' '}
              <span className="weight500">조언</span>하고 있어요.
              <br />
              막상 해보면 정말 말처럼 쉽지만은 않아요. <br />
            </h6>
          </div>
        </div>
      </div>
      <div className="pos-bottom">
        <BackBtn btnTxt="어떻게 하면 되나요?" />
      </div>
    </div>
  );

  const Intro3 = () => (
    <div className="h-100vh">
      <div className="card-container">
        <h3 className="letter87 weight500 line-h38">
          내게 딱 맞는
          <br />
          가장 <span className="txt-empasis">효과적</span>이고{' '}
          <span className="txt-empasis">흥미로운</span>
          <br />
          학습 콘텐츠 <br />
          <br />
        </h3>

        <div className="card-bottom-txt">
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              <span className="weight500">AI 큐레이터</span>가 추천하는 콘텐츠로
              <br />
              지금 바로 <span className="weight500">읽기 학습</span>을 시작할 수
              있어요.
              <br />
              가장 빠르게 실력이 오르는 순서로
              <br />
              내가 좋아하는 <span className="weight500">콘텐츠</span>를{' '}
              <span className="weight500">추천</span>합니다. <br />
            </h6>
          </div>
        </div>
      </div>
      <div className="pos-bottom">
        <BackBtn btnTxt="어떻게 하면 되나요?" />
      </div>
    </div>
  );

  const Intro4 = () => (
    <div className="h-100vh">
      <div className="card-container">
        <h3 className="letter87 weight500 line-h38">
          나의 <span className="txt-empasis">영어 읽기 실력</span>이 <br />
          좋아지고 있는 것을
          <br />
          눈으로 볼 수 있어요 <br />
        </h3>

        <div className="card-bottom-txt">
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              꾸준히 노력해도 실력이 늘고 있는지
              <br />
              알기 어려웠던 점을 <span className="weight500">AI 큐레이터</span>
              가 해결해줘요.
              <br />
              모든 학습 과정을 <span className="weight500">
                수치화
              </span>하고 <span className="weight500">분석</span>해서
              <br />
              실력이 어떻게 변하는지 차트로 보여 드려요.
            </h6>
          </div>
        </div>
      </div>
      <div className="pos-bottom">
        <BackBtn btnTxt="어떻게 하면 되나요?" />
      </div>
    </div>
  );

  const Intro5 = () => (
    <div className="h-100vh">
      <div className="card-container">
        <h3 className="letter87 weight500 line-h38">
          나의 <span className="txt-empasis">몇 퍼센트%</span>가 <br />
          되고 싶나요?
        </h3>

        <div className="card-bottom-txt">
          <p className="h7 mb3">여러분의 리딩퍼센트를 채워보세요.</p>
          <div className="mb40">
            <h4 className="small fontAvenir line-h30">
              Just get on a rocket ship
              <br />
              with{' '}
              <span className="primary-underline weight500">
                READING PERCENT!
              </span>
            </h4>
          </div>
          <div className="rest-icon mb11">
            <img src={icRest} alt="ic-rest" />
          </div>
          <div className="">
            <h6 className="weight100 line-h26">
              더 많은 콘텐츠를 <span className="weight500">읽고</span>,{' '}
              <span className="weight500">생각</span>하고,{' '}
              <span className="weight500">성장</span>하는
              <br />
              여러분을 <span className="weight500">응원</span>합니다.
            </h6>
          </div>
        </div>
      </div>
      <div className="pos-bottom">
        <BackBtn btnTxt="어떻게 하면 되나요?" />
      </div>
    </div>
  );

  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <Start />
      </SwiperSlide>
      <SwiperSlide>
        <Intro1 />
      </SwiperSlide>
      <SwiperSlide>
        <Intro2 />
      </SwiperSlide>
      <SwiperSlide>
        <Intro3 />
      </SwiperSlide>
      <SwiperSlide>
        <Intro4 />
      </SwiperSlide>
      <SwiperSlide>
        <Intro5 />
      </SwiperSlide>
    </Swiper>
  );
};
