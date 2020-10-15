import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';

export default function Interest1() {
	const [tagList, setTageList] = useState([
		{
			id: 1,
			active: false,
			txt: '정치',
		},
		{
			id: 2,
			active: false,
			txt: '경제',
		},
		{
			id: 3,
			active: true,
			txt: '소프트웨어개발',
		},
		{
			id: 4,
			active: true,
			txt: '사회',
		},
		{
			id: 5,
			active: true,
			txt: '문화',
		},
	]);

	const clickTag = id => {
		const result = tagList.map(tag => {
			const { active } = tag;
			if (tag.id === id) {
				return { ...tag, active: !active };
			} else {
				return { ...tag };
			}
		});
		setTageList(result);
	};
	return (
		<div className="h-100vh">
			<StackHeader />
			<div className="pt15 bothSpace">
				<div className="mb36">
					<h5 className="weight500">관심사는 무엇인가요?</h5>
				</div>
				<div className="content-scroll-container">
					{tagList.map(tag => (
						<button
							className={tag.active ? 'tag-item active' : 'tag-item'}
							key={tag.id}
							onClick={() => clickTag(tag.id)}
						>
							<p className="tag-txt">{tag.txt}</p>
						</button>
					))}
				</div>
				<div className="pos-bottom">
					<BackBtn btnTxt="다음" />
				</div>
			</div>
		</div>
	);
}
