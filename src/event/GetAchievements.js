import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import {
  arrLeft,
  arrRight,
  circleLock,
  lightColorCheck,
} from 'components/ImgUtils';

export default function GetAchievements(props) {
  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29">
        <div className="d-flex x-eq y-center mb25">
          <div className="">
            <img
              src={arrLeft}
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
          </div>
          <div className="">
            <h3 className="weight500">2020년 4월</h3>
          </div>
          <div className="">
            <img
              src={arrRight}
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </div>

        <div className="desc-info-box mb30">
          <h6 className="color-white weight500">나의 업적 획득 점수</h6>
          <div className="d-flex">
            <h4 className="color-white fontAvenirBold">
              10
              <span className="h7">p</span>
            </h4>

            <h4 className="color-white fontAvenir mr3 ml3"> / </h4>
            <h4 className="color-white fontAvenirBold">
              20
              <span className="h7">p</span>
            </h4>
          </div>
        </div>

        <div className="title-container mb20">
          <h5 className="weight500">진행중 업적</h5>
          <p className="smallFont weight500 primary-color">더보기</p>
        </div>

        <div className="achievements-list mb50">
          <div className="achievements-item">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">입문 챌린저</h6>
              <div className="tag-item small no-margin">
                <p className="tag-txt color-primary">INPROGRESS</p>
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                꾸준한 리뷰로 실력이 성장하기 시작했습니다. <br />총 리뷰 횟수
                5/10회에 도달했습니다.
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="achievements-item">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">능숙한 챌린저</h6>
              <div className="tag-item small no-margin">
                <p className="tag-txt color-primary">INPROGRESS</p>
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                꾸준한 리뷰로 실력이 성장하기 시작했습니다. <br />총 리뷰 횟수
                5/10회에 도달했습니다.
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="achievements-item">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">신규 챌린저의 등장</h6>
              <div className="tag-item small no-margin">
                <p className="tag-txt color-primary">INPROGRESS</p>
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                반갑습니다! <br />
                리딩퍼센트에 세로운 도전자로 등록하셨습니다!
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="title-container mb20">
          <h5 className="weight500">NEXT 업적</h5>
          <p className="smallFont weight500 primary-color">더보기</p>
        </div>

        <div className="achievements-list mb50">
          <div className="achievements-item">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">입문 챌린저</h6>
              <div className="">
                <img src={circleLock} alt="" style={{ width: '20px' }} />
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                꾸준한 리뷰로 실력이 성장하기 시작했습니다. <br />총 리뷰 횟수
                5/10회에 도달했습니다.
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="achievements-item">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">능숙한 챌린저</h6>
              <div className="">
                <img src={circleLock} alt="" style={{ width: '20px' }} />
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                꾸준한 리뷰로 실력이 성장하기 시작했습니다. <br />총 리뷰 횟수
                5/10회에 도달했습니다.
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="achievements-item">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">신규 챌린저의 등장</h6>
              <div className="">
                <img src={circleLock} alt="" style={{ width: '20px' }} />
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                반갑습니다! <br />
                리딩퍼센트에 세로운 도전자로 등록하셨습니다!
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="title-container mb20">
          <h5 className="weight500">획득한 업적</h5>
          <p className="smallFont weight500 primary-color">더보기</p>
        </div>

        <div className="achievements-list mb50">
          <div className="achievements-item get">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">입문 챌린저</h6>
              <div className="">
                <img src={lightColorCheck} alt="" style={{ width: '20px' }} />
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                꾸준한 리뷰로 실력이 성장하기 시작했습니다. <br />총 리뷰 횟수
                5/10회에 도달했습니다.
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="achievements-item get">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">능숙한 챌린저</h6>
              <div className="">
                <img src={lightColorCheck} alt="" style={{ width: '20px' }} />
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                꾸준한 리뷰로 실력이 성장하기 시작했습니다. <br />총 리뷰 횟수
                5/10회에 도달했습니다.
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="achievements-item get">
            <div className="d-flex x-eq mb10">
              <h6 className="weight500">신규 챌린저의 등장</h6>
              <div className="">
                <img src={lightColorCheck} alt="" style={{ width: '20px' }} />
              </div>
            </div>

            <div className="d-flex x-eq">
              <div className="h7 color-content-black">
                반갑습니다! <br />
                리딩퍼센트에 세로운 도전자로 등록하셨습니다!
              </div>

              <div className="self-t-end">
                <h4 className="weight400">
                  {' '}
                  10 <span className="h7">p</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
