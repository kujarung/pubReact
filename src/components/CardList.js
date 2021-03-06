import React from 'react';
import { icCirArrow } from 'components/ImgUtils';

export default function CardList(props) {
  const { list } = props;
  return (
    <div className="card-wrap">
      <div className="card-list-inner">
        {list.map((item) => (
          <div className="card-list-container" key={item.id}>
            <div className="percent-text">
              <h4 className="fontAvenirMedium color-primary">{item.percent}</h4>
            </div>
            <div className="">
              <h5 className="small">{item.title}</h5>
              <p className="h7 color-gray">{item.desc}</p>
            </div>
            <button className="arrow default-icon">
              <img src={icCirArrow} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
