import React from 'react';
import ImageCardItem from 'components/ImageCardItem';
import Header from 'components/Header';
import { base, base2, base3 } from 'components/ImgUtils';

export default function DailyLong(props) {
  const { openDrawer } = props;

  const imgList = [
    {
      id: 'abc1',
      imgPath: base,
      content: 'At least 50 people burned to death in a bus collision in Ghana',
    },
    {
      id: 'xcvxcv',
      imgPath: base2,
      content: 'At least 50 people burned to death in a bus collision in Ghana',
    },
    {
      id: 'xcvxcv',
      imgPath: base3,
      content:
        'At sdfdsleast 50 people burned to vxcvdeath in a buzxcvzxcs colvlision in Ghana',
    },
  ];

  return (
    <>
      <Header openDrawer={openDrawer} isFixed />
      <div className="main-content">
        <div className="title-container bothSpace mb21">
          <div>
            <h3 className="weight500">오늘의 콘텐츠</h3>
          </div>
        </div>
        <div className="bothSpace">
          {imgList.map((imgInfo) => (
            <ImageCardItem
              size={'long'}
              key={imgInfo.id}
              content={imgInfo.content}
              imgPath={imgInfo.imgPath}
            />
          ))}
        </div>
      </div>
    </>
  );
}
