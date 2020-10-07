import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import Swich from 'components/Swich';
import SettingRowWithSwich from 'components/SettingRowWithSwich';

export default function SettingAlam(props) {
  const [settingRow, setSettingRow] = useState([
    {
      settingTitle: '푸쉬알림',
      item: [
        {
          id: 1,
          title: '반복주기 알림',
          desc: '반복주기가 되면 푸쉬 알림으로 받을 수 있습니다.',
          currentActive: true,
        },
        {
          id: 2,
          title: '야간 알림',
          desc: '9시 이후에도 푸쉬 알림 수신에 동의합니다.',
          currentActive: false,
        },
      ],
    },
    {
      settingTitle: '마케팅 메시지 수신 동의',
      item: [
        {
          id: 3,
          title: '이메일',
          desc: '추천 및 이벤트 소식을 받습니다.',
          currentActive: false,
        },
        {
          id: 4,
          title: 'SMS 알림',
          desc: '문자 메시지로 소식을 받습니다.',
          currentActive: true,
        },
        {
          id: 5,
          title: '푸시 알림',
          desc: '푸시 알림으로 이벤트/마케팅 소식을 받습니다.',
          currentActive: true,
        },
      ],
    },
  ]);

  return (
    <>
      <StackHeader />
      <div className="bothSpace mt29 mb40">
        <h3 className="weight500">알림 설정</h3>
      </div>

      <div className="item-list-wrap no-arr">
        <div className="item-list-con">
          {settingRow.map((rows) => (
            <div className="item-list-con">
              <div className="setting-title">{rows.settingTitle}</div>
              {rows.item.map((val) => (
                <SettingRowWithSwich
                  title={val.title}
                  desc={val.desc}
                  currentActive={val.currentActive}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
