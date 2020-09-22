import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Start } from "Intro/Start";
import "assets/css/index.css";
import Main from "Main/Main";
import Login from "Login";
import Signup from "Signup";
import SignupResult from "SignupResult";
import PretestIntro from "Pretest/PretestIntro";
import Pretest1 from "Pretest/Pretest1";
import Pretest2 from "Pretest/Pretest2";
import Pretest3 from "Pretest/Pretest3";
import PretestResult from "Pretest/PretestResult";
import Interest1 from "Interest/Interest1";
import Interest2 from "Interest/Interest2";
import Recomment from "Interest/Recomment";
import Mylevel from "Mypage/Mylevel";
import MypagePro from "Mypage/MypagePro";
import MypageFree from "Mypage/MypageFree";
import MypageMypercent from "Mypage/MypageMypercent";
import MypageReviewRead from "Mypage/MypageReviewRead";
import MypageReviewVoca from "Mypage/MypageReviewVoca";
import Guide from "guide/Guide";
import Daily from "daily/Daily";
import DailyLong from "daily/DailyLong";

export default function RouterLink(props) {
  const { openDrawer } = props;
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/signupResult">
          <SignupResult />
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
        <Route path="/">
          <Guide openDrawer={openDrawer} />
        </Route>
        <Route path="/Main">
          <Main openDrawer={openDrawer} />
        </Route>
      </Switch>
    </HashRouter>
  );
}
