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
  dailyLong,
  home,
  homeMyLevel,
  mypageFree,
  mypageLock,
  mypageMypercent,
  mypageReview
} from "components/ImgUtils";
import React from "react";
import { Link } from "react-router-dom";
import "assets/css/temp.css";
export default function Guide() {
  return (
    <div className="guide">
      <section class="" style={{height: '380px'}}>
        <Link to="/components">
          <h3 class="">컴포넌트</h3>
        </Link>
      </section>

      <section class="">
        <Link to="/start">
          <div className="mb30 ">
            <img src={intro} alt="" />
          </div>

          <h3 class="">스플레시 및 인트로</h3>
        </Link>
      </section>
      <section class="">
        <Link to="/login">
          <div className="mb30 ">
            <img src={signin} alt="" />
          </div>

          <h3 class="">2.1_Sign in</h3>
        </Link>
      </section>
      <section class="">
        <Link to="/signup">
          <div className="mb30 ">
            <img src={signup} alt="" />
          </div>

          <h3 class="">2.2_Sign up</h3>
        </Link>
      </section>
      <section class="">
        <Link to="/signupResult">
          <div className="mb30 ">
            <img src={signupResult} alt="" />
          </div>

          <h3 class="">2.3_Sign_up_result</h3>
        </Link>
      </section>

      <section class="">
        <Link to="/interest1">
          <div className="mb30 ">
            <img src={interest1} alt="" />
          </div>

          <h3 class="">3.7_interest1</h3>
        </Link>
      </section>

      <section class="">
        <Link to="/interest2">
          <div className="mb30 ">
            <img src={interest2} alt="" />
          </div>

          <h3 class="">3.7_interest2</h3>
        </Link>
      </section>      

      <section class="">
        <Link to="/Recomment">
          <div className="mb30 ">
            <img src={recommend} alt="" />
          </div>

          <h3 class="">3.9_recommend</h3>
        </Link>
      </section>      
      

      <section class="">
        <Link to="/pretestIntro">
          <div className="mb30 ">
            <img src={pretestIntro} alt="" />
          </div>

          <h3 class="">3.1_pretest_intro</h3>
        </Link>
      </section>

      <section class="">
        <Link to="/pretest1">
          <div className="mb30 ">
            <img src={pretest1} alt="" />
          </div>

          <h3 class="">3.2.2_pretest1</h3>
        </Link>
      </section>      

      <section class="">
        <Link to="/pretest2">
          <div className="mb30 ">
            <img src={pretest2} alt="" />
          </div>

          <h3 class="">3.2.2_pretest2</h3>
        </Link>
      </section>             

      <section class="">
        <Link to="/pretest3">
          <div className="mb30 ">
            <img src={pretest3} alt="" />
          </div>

          <h3 class="">3.2.6_pretest10</h3>
        </Link>
      </section>              

      <section class="">
        <Link to="/pretestResult">
          <div className="mb30 ">
            <img src={pretestResult} alt="" />
          </div>

          <h3 class="">3.3_pretest_result</h3>
        </Link>
      </section>          

      <section class="">
        <Link to="/daily">
          <div className="mb30 ">
            <img src={daily1} alt="" />
          </div>

          <h3 class="">4.1.1_daily1</h3>
        </Link>
      </section>        

      <section class="">
        <Link to="/dailyLong">
          <div className="mb30 ">
            <img src={dailyLong} alt="" />
          </div>

          <h3 class="">4.1.2_daily2</h3>
        </Link>
      </section>         

      <section class="">
        <Link to="/Main">
          <div className="mb30 ">
            <img src={home} alt="" />
          </div>

          <h3 class="">4.2.1_home</h3>
        </Link>
      </section>         

      <section class="">
        <Link to="/Mylevel">
          <div className="mb30 ">
            <img src={homeMyLevel} alt="" />
          </div>

          <h3 class="">4.2.2_home-my level</h3>
        </Link>
      </section>          

      <section class="">
        <Link to="/MypagePro">
          <div className="mb30 ">
            <img src={mypageFree} alt="" />
          </div>

          <h3 class="">4.3.1_mypage_활동지수</h3>
        </Link>
      </section>         

      <section class="">
        <Link to="/MypageFree">
          <div className="mb30 ">
            <img src={mypageLock} alt="" />
          </div>

          <h3 class="">4.3.2_mypage_활동지수_잠금</h3>
        </Link>
      </section>       

      <section class="">
        <Link to="/MypageMypercent">
          <div className="mb30 ">
            <img src={mypageMypercent} alt="" />
          </div>

          <h3 class="">4.3.3_mypage_마이퍼센트</h3>
        </Link>
      </section>           

      <section class="">
        <Link to="/MypageReviewRead">
          <div className="mb30 ">
            <img src={mypageReview} alt="" />
          </div>

          <h3 class="">4.3.4_mypage_리뷰하기_read</h3>
        </Link>
      </section>              
    </div>
  );
}
