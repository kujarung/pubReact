import React from 'react';

export default function HorizList(props) {
  const { horzList } = props;
  return (
    <div className="">
      {horzList.map((list) => {
        const { imgPath, date, content, id, type } = list;
        return (
          <div key={id} className="horiz-item">
            <div className="horiz-inner">
              <a href="#" className="horiz-top">
                <div className="horiz-ima-box">
                  <img src={`${imgPath}`} alt="" />
                </div>
                <div className="">
                  <div className="top-desc-con">
                    <div className="date-txt">{date}</div>
                    <div className="top-icon no-space smallFont">LV.30</div>
                  </div>
                  <div className="list-content weight500">{content}</div>
                </div>
              </a>

              {type === 'hashTag' ? (
                <div className="list-bottom-back has-tag">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div className="">
                      <div className="tag-item no-bottom-margin">
                        <p className="tag-txt">#programming</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : type === 'empty' ? null : (
                <div className="list-bottom-back">
                  <div className="">
                    <div className="h7 weight500">27개</div>
                    <div className="smallFont color-gray50">학습 단어 수</div>
                  </div>
                  <div className="">
                    <div className="h7 weight500">27개</div>
                    <div className="smallFont color-gray50">문장 수</div>
                  </div>
                  <div className="">
                    <div className="h7 weight500">27개</div>
                    <div className="smallFont color-gray50">레벨 커버량</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
