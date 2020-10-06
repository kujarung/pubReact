import React, { useState } from 'react';
import ImageCardItem from 'components/ImageCardItem';
import VerticalList from 'components/VerticalList';
import HorizList from 'components/HorizList';
import Header from 'components/Header';
import {
	icPercent,
	base,
	tempback1,
	tempback2,
	tempbak2,
	tempbak1,
	back,
} from 'components/ImgUtils';
import RenderTab from 'components/RenderTab';

export default function Main(props) {
	const { openDrawer } = props;
	const [tabList, setTabList] = useState([
		{ id: 1, title: '정치', active: true },
		{ id: 2, title: '경제', active: false },
		{ id: 3, title: '사회', active: false },
		{ id: 4, title: '문화', active: false },
		{ id: 5, title: '예술', active: false },
		{ id: 6, title: 'IT', active: false },
		{ id: 7, title: 'Smart', active: false },
		{ id: 8, title: '언택트', active: false },
	]);

	const imgList = [
		{
			id: 'abc1',
			imgPath: base,
			content: 'At least 50 people burned to death in a bus collision in Ghana',
		},
	];
	const verticalList = [
		{
			id: 1,
			imgPath: tempback1,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
		{
			id: 2,
			imgPath: tempback2,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
		{
			id: 3,
			imgPath: tempback1,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
		{
			id: 4,
			imgPath: tempback2,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
	];

	const horzList = [
		{
			id: 112,
			imgPath: tempbak2,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
		{
			id: 2321,
			imgPath: tempbak1,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
		{
			id: 3,
			imgPath: tempback1,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
		{
			id: 4,
			imgPath: tempback2,
			date: 'Apr 18, 2020',
			content:
				'At least 50 people burned to death in a b… At least 50 people burned to death in a b…',
		},
	];

	const clickTab = id => {
		const resultTab = tabList.map(tab =>
			tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
		);
		setTabList(resultTab);
	};
	return (
		<>
			<div className={'drawer active'}>
				<div className="drawe-inner">
					<div className="back-btn-con tr">
						<img src={back} alt="" />
					</div>
					<div className="bothSpace">
						<div className="bottom-small-line small long mb32">
							<h5 className="weight500">리딩 퍼센트 사용법</h5>
						</div>

						<ul className="menu-list">
							<li>리딩 퍼센트 소개</li>
							<li>레벨 안내</li>
							<li>학습 방법 안내</li>
							<li>구독 안내</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="drawer-dim" />
			<Header openDrawer={openDrawer} />
			<div className="main-content">
				<div className="title-container bothSpace mb25">
					<div>
						<h2 className="samll fontAvenirBold">Contents</h2>
					</div>
					<div className="title-help-icon">
						<img src={icPercent} alt="percent-img" />
					</div>
				</div>

				<div className="tab-wrap">
					<RenderTab tabList={tabList} clickTab={clickTab} />

					<div className="tab-contant">
						<div className="mb40 bothSpace">
							{imgList.map(imgInfo => (
								<ImageCardItem
									key={imgInfo.id}
									content={imgInfo.content}
									imgPath={imgInfo.imgPath}
								/>
							))}
						</div>

						<div className="">
							<div className="title-container bothSpace">
								<h5 className="weight500">최근 본 컨텐츠</h5>
								<p className="smallFont weight500 primary-color">더보기</p>
							</div>
							{<VerticalList verticalList={verticalList} />}
						</div>

						<div className="">
							<div className="title-container bothSpace">
								<h5 className="weight500">추천 콘텐츠</h5>
								<p className="smallFont weight500 primary-color">더보기</p>
							</div>
							{<HorizList horzList={horzList} />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
