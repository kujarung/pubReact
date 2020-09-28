import {
  intro,
  signin,
  signupResult,
  signup,
  interest1,
  interest2,
  recommend,
  pretestIntro,
  pretest1,
  pretest2,
  pretest3,
  pretestResult,
  daily1,
  Step1_2_1,
  dailyLong,
  home,
  homeMyLevel,
  mypageFree,
  mypageLock,
  mypageMypercent,
  mypageReview,
  wrongL1,
  wrongL2,
  voca,
  contentList,
  studyVoca,
  subCon,
  noSub,
  RegCupon,
  Ranking,
  DailyCheck,
  AttendInfo,
  GetAchievements,
  LevelInfo,
  Setting,
  MyInfo,
  SettingAlam,
  SettingRepeat,
  SettingRepeatPop,
  HelpPop,
  Notice,
  EventIng,
  EventEnd,
  SendEmail,
  Subscribing,
  ServicePolicy,
  PrivatePolicy,
  AgreeMarketing,
  Withdrawal,
  WithdrawalPop,
  FAQ,
  Search,
  Alam,
  Study,
  Summary,
  Step1_1,
  Step1_2,
  Step2_1,
  Step2_2,
  Step3_1,
  Step3_2,
  Step3_3,
  Step3_3_pop1,
  Step3_3_pop2,
  Step3_4,
  Step3_5,
  Test1,
  Test2,
  Test2_1,
  Test3,
  Test4,
  WrongNote,
  LastRecommend,
  Restudy,
  MainHowTo,
} from 'components/ImgUtils';
import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/temp.css';
export default function Guide() {
  return (
    <div className="guide">
      <div className="over-hidden mb50">
        <div className="tc mb30">
          <h2>part1</h2>
        </div>
        <section className="" style={{ height: '380px' }}>
          <Link to="/components">
            <h3 className="">컴포넌트</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/start">
            <div className="mb30">
              <img src={intro} alt="" />
            </div>

            <h3 className="">스플레시 및 인트로</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/login">
            <div className="mb30">
              <img src={signin} alt="" />
            </div>

            <h3 className="">2.1_Sign in</h3>
          </Link>
        </section>
        <section className="">
          <Link to="/signup">
            <div className="mb30">
              <img src={signup} alt="" />
            </div>

            <h3 className="">2.2_Sign up</h3>
          </Link>
        </section>
        <section className="">
          <Link to="/signupResult">
            <div className="mb30">
              <img src={signupResult} alt="" />
            </div>

            <h3 className="">2.3_Sign_up_result</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/interest1">
            <div className="mb30">
              <img src={interest1} alt="" />
            </div>

            <h3 className="">3.7_interest1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/interest2">
            <div className="mb30">
              <img src={interest2} alt="" />
            </div>

            <h3 className="">3.7_interest2</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Recomment">
            <div className="mb30">
              <img src={recommend} alt="" />
            </div>

            <h3 className="">3.9_recommend</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/pretestIntro">
            <div className="mb30">
              <img src={pretestIntro} alt="" />
            </div>

            <h3 className="">3.1_pretest_intro</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/pretest1">
            <div className="mb30">
              <img src={pretest1} alt="" />
            </div>

            <h3 className="">3.2.2_pretest1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/pretest2">
            <div className="mb30">
              <img src={pretest2} alt="" />
            </div>

            <h3 className="">3.2.2_pretest2</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/pretest3">
            <div className="mb30">
              <img src={pretest3} alt="" />
            </div>

            <h3 className="">3.2.6_pretest10</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/pretestResult">
            <div className="mb30">
              <img src={pretestResult} alt="" />
            </div>

            <h3 className="">3.3_pretest_result</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/daily">
            <div className="mb30">
              <img src={daily1} alt="" />
            </div>

            <h3 className="">4.1.1_daily1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/dailyLong">
            <div className="mb30">
              <img src={dailyLong} alt="" />
            </div>

            <h3 className="">4.1.2_daily2</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Main">
            <div className="mb30">
              <img src={home} alt="" />
            </div>

            <h3 className="">4.2.1_home</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Mylevel">
            <div className="mb30">
              <img src={homeMyLevel} alt="" />
            </div>

            <h3 className="">4.2.2_home-my level</h3>
          </Link>
        </section>
      </div>

      <div className="over-hidden mb50">
        <div className="tc mb30">
          <h2>part2</h2>
        </div>
        <section className="">
          <Link to="/MypagePro">
            <div className="mb30">
              <img src={mypageFree} alt="" />
            </div>

            <h3 className="">4.3.1_mypage_ㄷ동지수</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/MypageFree">
            <div className="mb30">
              <img src={mypageLock} alt="" />
            </div>

            <h3 className="">4.3.2_mypage_활동지수_잠금</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/MypageMypercent">
            <div className="mb30">
              <img src={mypageMypercent} alt="" />
            </div>

            <h3 className="">4.3.3_mypage_마이퍼센트</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/MypageReviewRead">
            <div className="mb30">
              <img src={mypageReview} alt="" />
            </div>

            <h3 className="">4.3.4_mypage_리뷰하기_read</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/MypageReviewVoca">
            <div className="mb30">
              <img src={voca} alt="" />
            </div>

            <h3 className="">4.3.5_mypage_리뷰하기_voca</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/ContentsList">
            <div className="mb30">
              <img src={contentList} alt="" />
            </div>

            <h3 className="">4.3.6_컨텐츠목록</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/WordList1">
            <div className="mb30">
              <img src={wrongL1} alt="" />
            </div>
            <h3 className="">4.3.7_단어목록_예문</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/WordList2">
            <div className="mb30">
              <img src={wrongL2} alt="" />
            </div>

            <h3 className="">4.3.8_단어목록_단어뜻</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/StudyWord">
            <div className="mb30">
              <img src={studyVoca} alt="" />
            </div>

            <h3 className="">4.3.9_단어학습</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Nosubscribe">
            <div className="mb30">
              <img src={noSub} alt="" />
            </div>

            <h3 className="">4.3.10_구독서비스_구독중이지않을때</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/SubscribeContent">
            <div className="mb30">
              <img src={subCon} alt="" />
            </div>

            <h3 className="">4.3.11_구독서비스_내용</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Subscribing">
            <div className="mb30">
              <img src={Subscribing} alt="" />
            </div>

            <h3 className="">4.3.12_구독서비스_구독중일때</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/RegCupon">
            <div className="mb30">
              <img src={RegCupon} alt="" />
            </div>

            <h3 className="">4.3.13_쿠폰등록</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/MainHowTo">
            <div className="mb30">
              <img src={MainHowTo} alt="" />
            </div>

            <h3 className="">4.4.1_how to</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Ranking">
            <div className="mb30">
              <img src={Ranking} alt="" />
            </div>

            <h3 className="">4.3.14_ranking</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/DailyCheck">
            <div className="mb30">
              <img src={DailyCheck} alt="" />
            </div>

            <h3 className="">4.3.15_출석</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/AttendInfo">
            <div className="mb30">
              <img src={AttendInfo} alt="" />
            </div>

            <h3 className="">4.3.16_출석안내</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/GetAchievements">
            <div className="mb30">
              <img src={GetAchievements} alt="" />
            </div>

            <h3 className="">4.3.17_업적획득</h3>
          </Link>
        </section>
        <section className="">
          <Link to="/LevelInfo">
            <div className="mb30">
              <img src={LevelInfo} alt="" />
            </div>

            <h3 className="">4.4.2_level info</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Setting">
            <div className="mb30">
              <img src={Setting} alt="" />
            </div>

            <h3 className="">4.5.1_setting</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/MyInfo">
            <div className="mb30">
              <img src={MyInfo} alt="" />
            </div>

            <h3 className="">4.5.2_my_info</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/SettingAlam">
            <div className="mb30">
              <img src={SettingAlam} alt="" />
            </div>

            <h3 className="">4.5.3_알림설정</h3>
          </Link>
        </section>
        <section className="">
          <Link to="/SettingRepeat">
            <div className="mb30">
              <img src={SettingRepeat} alt="" />
            </div>

            <h3 className="">4.5.4_반복정_1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/SettingRepeatPop">
            <div className="mb30">
              <img src={SettingRepeatPop} alt="" />
            </div>

            <h3 className="">4.5.4_반복주기설정_3</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/HelpPop">
            <div className="mb30">
              <img src={HelpPop} alt="" />
            </div>

            <h3 className="">4.5.5_도움말다시보기</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Notice">
            <div className="mb30">
              <img src={Notice} alt="" />
            </div>

            <h3 className="">4.5.6_공지사항</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/EventIng">
            <div className="mb30">
              <img src={EventIng} alt="" />
            </div>

            <h3 className="">4.5.7_이벤트_진행 중</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/EventEnd">
            <div className="mb30">
              <img src={EventEnd} alt="" />
            </div>

            <h3 className="">4.5.7_이벤트_종료</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/FAQ">
            <div className="mb30">
              <img src={FAQ} alt="" />
            </div>

            <h3 className="">4.5.8_자주묻는질문</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/SendEmail">
            <div className="mb30">
              <img src={SendEmail} alt="" />
            </div>

            <h3 className="">4.5.9_이메일문의</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/ServicePolicy">
            <div className="mb30">
              <img src={ServicePolicy} alt="" />
            </div>

            <h3 className="">4.5.10_서비스이용약관</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/PrivatePolicy">
            <div className="mb30">
              <img src={PrivatePolicy} alt="" />
            </div>

            <h3 className="">4.5.11_개인정보처리방침</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/AgreeMarketing">
            <div className="mb30">
              <img src={AgreeMarketing} alt="" />
            </div>

            <h3 className="">4.5.12_마케팅메시지수신동의</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Withdrawal">
            <div className="mb30">
              <img src={Withdrawal} alt="" />
            </div>

            <h3 className="">4.5.13_서비스탈퇴팝업</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/WithdrawalPop">
            <div className="mb30">
              <img src={WithdrawalPop} alt="" />
            </div>

            <h3 className="">4.5.13_서비스탈퇴팝업</h3>
          </Link>
        </section>
      </div>

      <div className="over-hidden mb50">
        <div className="tc mb30">
          <h2>part3</h2>
        </div>

        <section className="">
          <Link to="/Search">
            <div className="mb30">
              <img src={Search} alt="" />
            </div>

            <h3 className="">5_Search</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Alam">
            <div className="mb30">
              <img src={Alam} alt="" />
            </div>

            <h3 className="">6_알람</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Study">
            <div className="mb30">
              <img src={Study} alt="" />
            </div>

            <h3 className="">7.1_study, 8.2_review1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Summary">
            <div className="mb30">
              <img src={Summary} alt="" />
            </div>

            <h3 className="">7.3_summary, 8.4_summary, 9.7_summary</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step1_1">
            <div className="mb30">
              <img src={Step1_1} alt="" />
            </div>

            <h3 className="">8.5_step1_1, 8.5_step1_1 copy</h3>
          </Link>
        </section>
        <section className="">
          <Link to="/Step1_2">
            <div className="mb30">
              <img src={Step1_2} alt="" />
            </div>

            <h3 className="">7.5_step1_2, 7.5_step1_2_toast</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step2_1">
            <div className="mb30">
              <img src={Step2_1} alt="" />
            </div>

            <h3 className="">7.6_step2_1, 8.6_step2_1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step2_2">
            <div className="mb30">
              <img src={Step2_2} alt="" />
            </div>

            <h3 className="">7.8_step2_3</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step1_2_1">
            <div className="mb30">
              <img src={Step1_2_1} alt="" />
            </div>

            <h3 className="">8.6_step1_2</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_1">
            <div className="mb30">
              <img src={Step3_1} alt="" />
            </div>

            <h3 className="">7.9_step3_1, 8.7_step2_1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_2">
            <div className="mb30">
              <img src={Step3_2} alt="" />
            </div>

            <h3 className="">
              7.10_step3_2, 7.10_step3_2_more, 8.10_step3_2, 8.10_step3_2_more
            </h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_3">
            <div className="mb30">
              <img src={Step3_3} alt="" />
            </div>

            <h3 className="">7.11_step3_3, 8.11_step3_3</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_3_pop1">
            <div className="mb30">
              <img src={Step3_3_pop1} alt="" />
            </div>

            <h3 className="">7.13_step3_5, 8.13_step3_5</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_3_pop2">
            <div className="mb30">
              <img src={Step3_3_pop2} alt="" />
            </div>

            <h3 className="">7.13_step3_5_2, 8.13_step3_5</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_4">
            <div className="mb30">
              <img src={Step3_4} alt="" />
            </div>

            <h3 className="">7.12_step3_4, 8.12_step3_4</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Step3_5">
            <div className="mb30">
              <img src={Step3_5} alt="" />
            </div>

            <h3 className="">7.14_step3_6, 8.14_step3_6</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Restudy">
            <div className="mb30">
              <img src={Restudy} alt="" />
            </div>

            <h3 className="">8.1_re_단어학습</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Test1">
            <div className="mb30">
              <img src={Test1} alt="" />
            </div>

            <h3 className="">9.1_test1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Test1">
            <div className="mb30">
              <img src={Test1} alt="" />
            </div>

            <h3 className="">9.1_test1</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Test2">
            <div className="mb30">
              <img src={Test2} alt="" />
            </div>

            <h3 className="">9.1_test2</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Test2_1">
            <div className="mb30">
              <img src={Test2_1} alt="" />
            </div>

            <h3 className="">9.2_test2 copy</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Test3">
            <div className="mb30">
              <img src={Test3} alt="" />
            </div>

            <h3 className="">9.2_test3</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/Test4">
            <div className="mb30">
              <img src={Test4} alt="" />
            </div>

            <h3 className="">9.2_test4</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/WrongNote">
            <div className="mb30">
              <img src={WrongNote} alt="" />
            </div>

            <h3 className="">9.6_오답노트</h3>
          </Link>
        </section>

        <section className="">
          <Link to="/LastRecommend">
            <div className="mb30">
              <img src={LastRecommend} alt="" />
            </div>

            <h3 className="">9.8_recommend</h3>
          </Link>
        </section>
      </div>
    </div>
  );
}
