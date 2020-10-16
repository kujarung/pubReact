import React, { useState } from 'react';
import StackHeaderWhite from 'components/StackHeaderWhite';
import { hand, avatar, tempback1, tempback2 } from 'components/ImgUtils';
import BackBtn from 'components/BackBtn';
import SerchInput from '../components/SerchInput';
import RenderTab from '../components/RenderTab';
import WrongAnserList from 'components/WrongAnserList';
export default function Restudy() {
	const [tabList, setTabList] = useState([
		{ id: 1, title: '예문', active: true },
		{ id: 2, title: '단어 뜻', active: false },
	]);
	const clickTab = id => {
		const resultTab = tabList.map(tab =>
			tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
		);
		setTabList(resultTab);
	};
	const wrongAnserList = [
		{
			id: 1,
			contentTxt:
				'Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…',
			img: tempback1,
		},
		{
			id: 2,
			contentTxt:
				'Mauritius Copes With Split Japanese Ship That Spil…Mauritius Copes With Split Japanese Ship That Spil…',
			img: tempback2,
			isDelete: true,
		},
		{
			id: 3,
			contentTxt: 'Mauritius Copes With Copes WithCopes WithCopes With',
			img: avatar,
		},
	];
	return (
		<>
			<StackHeaderWhite isAbsol rightItem="hasX" />
			<div className="mb40">
				<div className="study-wrap he360">
					<div className="study-img he360">
						<img src={hand} alt="" />
						<div className="pos-bottom">
							<div className="top-icon-list">
								<div className="top-icon h7">Global</div>
								<div className="top-icon h7">Lv.30</div>
							</div>
							<h4 className="inner-content color-white weight500 ">
								At least 50 people burned to death in a bus collision in Ghana
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div className="bothSpace mb43">
				<div className="mb40">
					<div className="mt29 mb20 title-container">
						<h3 className="weight500">단어목록</h3>
						<div className="smallFont color-primary weight500">27개</div>
					</div>
				</div>

				<div className="">
					<SerchInput hasX placeholder="검색어를 입력해주세요" />
				</div>
			</div>

			<div className="mb43">
				<RenderTab tabList={tabList} isFull={true} clickTab={clickTab} />
			</div>

			<div className="lock op">
				<WrongAnserList wrongAnserList={wrongAnserList} isProbleam isLock />
			</div>

			<div className="bothSpace">
				<div className="mb20">
					<BackBtn btnTxt="학습시작하기" />
				</div>
			</div>
		</>
	);
}
