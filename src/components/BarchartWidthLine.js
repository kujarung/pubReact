import React, { useEffect, useState } from 'react'
export default function BarchartWidthLine(props) {
  const [offsetInfo, setOffsetInfo] = useState({
    x1 : 0,
    y1 : 0,
    x2 : 0,
    y2 : 0
  })
  const barList = [
    [{id:1, percent:10, disabled: false},{id:2, percent:20 , disabled: false}],
    [{id:3, percent: 60 , disabled: false},{id:4, percent:20 , disabled: true}]
  ]
  const lineInfo = {
    source : 1,
    target: 3
  }
  useEffect( () => {
    const {source, target} = lineInfo;
    const scrollY = window.pageXOffset;
    const sourceYInfo = document.getElementById(`bar-key-${source}`)
    const sourceLeftInfo = document.getElementById(`bar-key-${source}`)
    const sourceRightInfo = document.getElementById(`bar-key-${source}`)
    const targetYInfo = document.getElementById(`bar-key-${target}`)
    const targetLeftInfo = document.getElementById(`bar-key-${target}`)
    const targetRightInfo = document.getElementById(`bar-key-${target}`)
    console.log(targetRightInfo)
    // getBoundingClientRect
    
    // const x1 = (sourceLeftInfo + sourceRightInfo) / 2;
    // const y1 = (scrollY + sourceYInfo);
    // const x2 = (targetLeftInfo + targetRightInfo) / 2;
    // const y2 = (scrollY + targetYInfo);
    // setOffsetInfo({
    //   x1,y1,x2,y2
    // })
  },[]) 
  

  return (
    <div className="bar-wrap">
    {barList.map((item) => {
      const {percent, id} = item;
      return (
        <>
          <svg style={{width: '100%', height: '100%'}}>
                           <line x1={offsetInfo.x1} y1={offsetInfo.y1} x2={offsetInfo.x2} y2={offsetInfo.y2}></line>
          </svg>
          <div key={`bar-key-${id}`} id={`bar-key-${id}`}>
            <div className="bar-container mb10">
              <div
                className="inner-percent"
                style={{ height: `${(145 / 100) * percent}px` }}
              ></div>
            </div>
          </div>
        </>
      );
    })}
  </div>
  )
}
