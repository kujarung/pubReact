import {
  intro,
  signin,
  signupResult,
  signup,
  pretestIntro,
  interest1,
} from "components/ImgUtils";
import React from "react";
import { Link } from "react-router-dom";
import "assets/css/temp.css";
export default function Guide() {
  return (
    <div className="guide">
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
        <Link to="/signupResult">
          <div className="mb30 ">
            <img src={signupResult} alt="" />
          </div>

          <h3 class="">2.3_Sign_up_result</h3>
        </Link>
      </section>
    </div>
  );
}
