import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';

export default function Interest5() {
	const [tagList, setTageList] = useState([
		{
			id: 1,
			active: false,
			txt: '남성',
		},
		{
			id: 2,
			active: false,
			txt: '여성',
		},
		{
			id: 3,
			active: true,
			txt: 'LGBTQIA',
		},
		{
			id: 4,
			active: true,
			txt: '선택안함',
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
				<div className="mb36 stack-content">
					<h5 className="weight500">나의 젠더</h5>
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
					<BackBtn btnTxt="설문조사 완료" />
				</div>
			</div>
		</div>
	);
}
