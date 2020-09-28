import React from 'react';
import StackHeader from 'components/StackHeader';
import { icCirArrow, alarm, alarmD } from 'components/ImgUtils';
import BackBtn from 'components/BackBtn';

export default function Alam(props) {
  const dotList = [
    {
      title: '모두 읽은 상태로 표시',
      active: false,
    },
    {
      title: '읽은 알림 삭제',
      active: true,
    },
  ];
  return (
    <div className="h-100vh">
      <StackHeader rightItem="selector" dotList={dotList} />
      <div className="bothSpace mt29 mb20">
        <h3 className="weight500">주요알림</h3>
      </div>

      <div className="bothSpace">
        <div className="shadow-box mb20">
          <div className="repeact-con alam">
            <div className="repeact-row no-row">
              <div
                className="mr10 alam-img-con"
                style={{ backgroundImage: `url(${alarm})` }}
              ></div>

              <div className="">
                <h5 className="small weight300 mr10">
                  장애 발생 및 처리 결과 안내
                </h5>
                <div className="h7 color-gray">총 3회 학습</div>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-box mb20">
          <div className="repeact-con alam">
            <div className="repeact-row no-row">
              <div
                className="mr10 alam-img-con"
                style={{ backgroundImage: `url(${alarm})` }}
              ></div>

              <div className="">
                <h5 className="small weight300 mr10">
                  장애 발생 및 처리 결과 안내
                </h5>
                <div className="h7 color-gray">총 3회 학습</div>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-box mb20">
          <div className="repeact-con alam read">
            <div className="repeact-row no-row">
              <div
                className="mr10 alam-img-con"
                style={{ backgroundImage: `url(${alarmD})` }}
              ></div>

              <div className="">
                <h5 className="small weight300 mr10">
                  장애 발생 및 처리 결과 안내
                </h5>
                <div className="h7 color-gray">총 3회 학습</div>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-box mb20">
          <div className="repeact-con alam read">
            <div className="repeact-row no-row">
              <div
                className="mr10 alam-img-con"
                style={{ backgroundImage: `url(${alarmD})` }}
              ></div>

              <div className="">
                <h5 className="small weight300 mr10">
                  장애 발생 및 처리 결과 안내
                </h5>
                <div className="h7 color-gray">총 3회 학습</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
