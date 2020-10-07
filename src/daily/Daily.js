import React from 'react';
import ImageCardItemAuto from 'components/ImageCardItemAuto';
import Header from 'components/Header';
import { base3 } from 'components/ImgUtils';

export default function Daily(props) {
  const { openDrawer } = props;

  const imgList = [
    {
      id: 'abc1',
      imgPath: base3,
      content: 'At least 50 people burned to death in a bus collision in Ghana',
    },
  ];

  return (
    <div className="h-100vh over-hidden">
      <Header openDrawer={openDrawer} isFixed />
      <div className="calc-height-min-62">
        <div className="title-container bothSpace mb21 mt73">
          <div>
            <h3 className="weight500">오늘의 콘텐츠</h3>
          </div>
        </div>
        <div className="bothSpace calc-height-min-84">
          {imgList.map((imgInfo) => (
            <ImageCardItemAuto
              key={imgInfo.id}
              content={imgInfo.content}
              imgPath={imgInfo.imgPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
