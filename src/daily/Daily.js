import React from "react";
import ImageList from "components/ImageList";
import Header from "components/Header";
import { base3 } from "components/ImgUtils";

export default function Daily(props) {
  const { openDrawer } = props;

  const imgList = [
    {
      id: "abc1",
      imgPath: base3,
      content: "At least 50 people burned to death in a bus collision in Ghana",
    },
  ];

  return (
    <>
      <Header openDrawer={openDrawer} />
      <div className="main-content">
        <div className="title-container bothSpace mb21">
          <div>
            <h3 className="weight500">오늘의 콘텐츠</h3>
          </div>
        </div>
        <div className="bothSpace">
          {imgList.map((imgInfo) => (
            <ImageList
              long={true}
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
