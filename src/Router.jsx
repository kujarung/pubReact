import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Start } from 'Intro/Start';
import 'assets/css/index.css';
import Main from 'Main/Main';
import Login from 'Login';
import Signup from 'Signup';
import SignupResult from 'SignupResult';
import PretestIntro from 'Pretest/PretestIntro';
import Pretest1 from 'Pretest/Pretest1';
import Pretest2 from 'Pretest/Pretest2';
import Pretest3 from 'Pretest/Pretest3';
import PretestResult from 'Pretest/PretestResult';
import Interest1 from 'Interest/Interest1';
import Interest2 from 'Interest/Interest2';
import Recomment from 'Interest/Recomment';
import Mylevel from 'Mypage/Mylevel';
import MypagePro from 'Mypage/MypagePro';
import MypageFree from 'Mypage/MypageFree';
import MypageMypercent from 'Mypage/MypageMypercent';
import MypageReviewRead from 'Mypage/MypageReviewRead';
import MypageReviewVoca from 'Mypage/MypageReviewVoca';
import Guide from 'guide/Guide';
import Daily from 'daily/Daily';
import DailyLong from 'daily/DailyLong';
import Components from 'guide/Components';
import ContentsList from 'Mypage/ContentsList';
import WordList1 from 'WordList/WordList1';
import WordList2 from 'WordList/WordList2';
import StudyWord from 'WordList/StudyWord';
import Nosubscribe from 'Subscribe/Nosubscribe';
import SubscribeContent from 'Subscribe/SubscribeContent';
import Subscribing from 'Subscribe/Subscribing';
import RegCupon from 'Subscribe/RegCupon';
import Ranking from 'event/Ranking';
import DailyCheck from 'event/DailyCheck';
import AttendInfo from 'event/AttendInfo';
import GetAchievements from 'event/GetAchievements';
import LevelInfo from 'event/LevelInfo';
import Setting from 'setting/Setting';
import MyInfo from 'setting/MyInfo';
import SettingAlam from 'setting/SettingAlam';
import SettingRepeat from 'setting/SettingRepeat';
import SettingRepeatPop from 'setting/SettingRepeatPop';
import HelpPop from 'setting/HelpPop';
import Notice from 'setting/Notice';
import EventIng from 'event/EventIng';
import EventEnd from 'event/EventEnd';
import FAQ from 'event/FAQ';
import SendEmail from 'event/SendEmail';
import ServicePolicy from 'policy/ServicePolicy';
import PrivatePolicy from 'policy/PrivatePolicy';
import AgreeMarketing from 'policy/AgreeMarketing';
import Withdrawal from 'policy/Withdrawal';
import WithdrawalPop from 'policy/WithdrawalPop';
import Search from 'Search/Search';
import Alam from 'Alam/Alam';
import Study from 'Study/Study';
import Summary from 'Study/Summary';
import Step1_1 from 'Step1/Step1_1';
import Step1_2 from 'Step1/Step1_2';
import Step1_2_1 from 'Step1/Step1_2_1';
import Step2_1 from 'Step2/Step2_1';
import Step2_2 from 'Step2/Step2_2';
import Step3_1 from 'Step3/Step3_1';
import Step3_2 from 'Step3/Step3_2';
import Step3_3 from 'Step3/Step3_3';
import Step3_3_pop1 from 'Step3/Step3_3_pop1';
import Step3_3_pop2 from 'Step3/Step3_3_pop2';
import Step3_4 from 'Step3/Step3_4';
import Step3_5 from 'Step3/Step3_5';
import Test1 from 'Test/Test1';
import Test2 from 'Test/Test2';
import Test2_1 from 'Test/Test2_1';
import Test3 from 'Test/Test3';
import Test4 from 'Test/Test4';
import WrongNote from 'WordList/WrongNote';
import LastRecommend from 'WordList/LastRecommend';
import Restudy from 'Study/Restudy';
import Step2_3 from 'Step2/Step2_3';
import MainHowTo from 'Main/MainHowTo';

export default function RouterLink(props) {
  const { openDrawer } = props;
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/Test1">
          <Test1 />
        </Route>
        <Route path="/MainHowTo">
          <MainHowTo />
        </Route>
        <Route path="/Restudy">
          <Restudy />
        </Route>
        <Route path="/Step1_2_1">
          <Step1_2_1 />
        </Route>

        <Route path="/Step2_3">
          <Step2_3 />
        </Route>

        <Route path="/LastRecommend">
          <LastRecommend />
        </Route>

        <Route path="/WrongNote">
          <WrongNote />
        </Route>

        <Route path="/Test4">
          <Test4 />
        </Route>
        <Route path="/Test2">
          <Test2 />
        </Route>
        <Route path="/Test2_1">
          <Test2_1 />
        </Route>
        <Route path="/Test3">
          <Test3 />
        </Route>

        <Route path="/Step3_3_pop1">
          <Step3_3_pop1 />
        </Route>
        <Route path="/Step3_3_pop2">
          <Step3_3_pop2 />
        </Route>

        <Route path="/Step3_5">
          <Step3_5 />
        </Route>

        <Route path="/Step1_1">
          <Step1_1 />
        </Route>
        <Route path="/Step3_4">
          <Step3_4 />
        </Route>

        <Route path="/Step3_3">
          <Step3_3 />
        </Route>
        <Route path="/Step2_2">
          <Step2_2 />
        </Route>
        <Route path="/Step3_1">
          <Step3_1 />
        </Route>
        <Route path="/Step3_2">
          <Step3_2 />
        </Route>

        <Route path="/Step2_1">
          <Step2_1 />
        </Route>
        <Route path="/Step1_2">
          <Step1_2 />
        </Route>
        <Route path="/Study">
          <Study />
        </Route>
        <Route path="/Summary">
          <Summary />
        </Route>

        <Route path="/Search">
          <Search />
        </Route>
        <Route path="/Alam">
          <Alam />
        </Route>
        <Route path="/Withdrawal">
          <Withdrawal />
        </Route>
        <Route path="/WithdrawalPop">
          <WithdrawalPop />
        </Route>

        <Route path="/AgreeMarketing">
          <AgreeMarketing />
        </Route>
        <Route path="/PrivatePolicy">
          <PrivatePolicy />
        </Route>
        <Route path="/ServicePolicy">
          <ServicePolicy />
        </Route>
        <Route path="/SettingAlam">
          <SettingAlam />
        </Route>
        <Route path="/EventIng">
          <EventIng />
        </Route>
        <Route path="/EventEnd">
          <EventEnd />
        </Route>
        <Route path="/FAQ">
          <FAQ />
        </Route>
        <Route path="/SendEmail">
          <SendEmail />
        </Route>

        <Route path="/HelpPop">
          <HelpPop />
        </Route>
        <Route path="/Notice">
          <Notice />
        </Route>

        <Route path="/SettingRepeat">
          <SettingRepeat />
        </Route>
        <Route path="/SettingRepeatPop">
          <SettingRepeatPop />
        </Route>

        <Route path="/Setting">
          <Setting />
        </Route>
        <Route path="/MyInfo">
          <MyInfo />
        </Route>

        <Route path="/AttendInfo">
          <AttendInfo />
        </Route>
        <Route path="/LevelInfo">
          <LevelInfo />
        </Route>

        <Route path="/GetAchievements">
          <GetAchievements />
        </Route>
        <Route path="/RegCupon">
          <RegCupon />
        </Route>
        <Route path="/DailyCheck">
          <DailyCheck />
        </Route>
        <Route path="/Ranking">
          <Ranking />
        </Route>
        <Route path="/Subscribing">
          <Subscribing />
        </Route>
        <Route path="/ContentsList">
          <ContentsList />
        </Route>
        <Route path="/SubscribeContent">
          <SubscribeContent />
        </Route>

        <Route path="/Nosubscribe">
          <Nosubscribe />
        </Route>
        <Route path="/WordList1">
          <WordList1 />
        </Route>
        <Route path="/WordList2">
          <WordList2 />
        </Route>
        <Route path="/StudyWord">
          <StudyWord />
        </Route>

        <Route path="/signupResult">
          <SignupResult />
        </Route>
        <Route path="/Components">
          <Components />
        </Route>
        <Route path="/Daily">
          <Daily openDrawer={openDrawer} />
        </Route>
        <Route path="/DailyLong">
          <DailyLong openDrawer={openDrawer} />
        </Route>

        <Route path="/MypagePro">
          <MypagePro />
        </Route>
        <Route path="/MypageReviewRead">
          <MypageReviewRead />
        </Route>
        <Route path="/MypageReviewVoca">
          <MypageReviewVoca />
        </Route>
        <Route path="/MypageFree">
          <MypageFree />
        </Route>
        <Route path="/MypageMypercent">
          <MypageMypercent />
        </Route>

        <Route path="/Mylevel">
          <Mylevel openDrawer={openDrawer} />
        </Route>
        <Route path="/signupResult">
          <SignupResult />
        </Route>
        <Route path="/Interest1">
          <Interest1 />
        </Route>
        <Route path="/Interest2">
          <Interest2 />
        </Route>
        <Route path="/Recomment">
          <Recomment />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/pretestIntro">
          <PretestIntro />
        </Route>
        <Route path="/Pretest1">
          <Pretest1 />
        </Route>
        <Route path="/Pretest2">
          <Pretest2 />
        </Route>
        <Route path="/Pretest3">
          <Pretest3 />
        </Route>
        <Route path="/PretestResult">
          <PretestResult />
        </Route>
        <Route path="/Main">
          <Main openDrawer={openDrawer} />
        </Route>
        <Route path="/">
          <Guide openDrawer={openDrawer} />
        </Route>
      </Switch>
    </HashRouter>
  );
}
