import React, { useState } from "react";
import StackHeader from "components/StackHeader";
import SerchInput from "components/SerchInput";
import Checkbox from "components/Checkbox";

export default function Interest1() {
  const [tagList, setTageList] = useState([
    {
      id: 1,
      active: true,
      txt: "정치",
    },
    {
      id: 2,
      active: true,
      txt: "경제",
    },
    {
      id: 3,
      active: true,
      txt: "소프트웨어개발",
    },
    {
      id: 4,
      active: true,
      txt: "사회",
    },
    {
      id: 5,
      active: true,
      txt: "문화",
    },
  ]);

  return (
    <div className="h-100vh">
      <StackHeader />
      <div className="pt15 bothSpace">
        <div className="mb36">
          <h5 className="weight500">관심사는 해시태그는 무엇인가요?</h5>
        </div>
        <div className="">
          <div className="mb22">
            <SerchInput />
          </div>

          <div className="has-list mb22">
            <div className="item">
              <div className="h7"># program</div>
              <div className="">
                <Checkbox checkbox={{ id: 1 }} />
              </div>
            </div>

            <div className="item">
              <div className="h7"># program</div>
              <div className="">
                <Checkbox checkbox={{ id: 2, txt: "" }} />
              </div>
            </div>
          </div>

          <div className="scroll">
            {tagList.map((tag) => (
              <div
                className={tag.active ? "tag-item active" : "tag-item"}
                key={tag.id}
              >
                <p className="tag-txt">{tag.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
