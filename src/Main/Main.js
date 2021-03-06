import React, { useState } from 'react';
import ImageCardItem from 'components/ImageCardItem';
import VerticalList from 'components/VerticalList';
import HorizList from 'components/HorizList';
import Header from 'components/Header';
import { icPercent, base, tempback1, tempback2, tempbak2, tempbak1 } from 'components/ImgUtils';
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
	];

	const clickTab = id => {
		const resultTab = tabList.map(tab =>
			tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
		);
		setTabList(resultTab);
	};
	return (
		<>
			<Header openDrawer={openDrawer} isFixed />
			<div className="main-content">
				<div className="title-container bothSpace mb25">
					<div>
						<h2 className="samll fontAvenirBold">Contents</h2>
					</div>
					<button className="title-help-icon">
						<img src={icPercent} alt="percent-img" />
					</button>
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
								<a href="#">
									<p className="smallFont weight500 primary-color">더보기</p>
								</a>
							</div>
							{<VerticalList verticalList={verticalList} />}
						</div>

						<div className="mb30">
							<div className="title-container bothSpace">
								<h5 className="weight500">추천 콘텐츠</h5>
								<a href="#">
									<p className="smallFont weight500 primary-color">더보기</p>
								</a>
							</div>
							{<HorizList horzList={horzList} />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
