import React, { useState } from 'react';
import StackHeader from 'components/StackHeader';
import SerchInput from 'components/SerchInput';
import Checkbox from 'components/Checkbox';
import BackBtn from 'components/BackBtn';

export default function Interest4() {
	const [tagList, setTageList] = useState([
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
		{
			id: 1,
			active: true,
			txt: '학생',
		},
		{
			id: 2,
			active: false,
			txt: '직장인',
		},
		{
			id: 3,
			active: false,
			txt: '기업가',
		},
		{
			id: 4,
			active: false,
			txt: '은퇴자',
		},
		{
			id: 5,
			active: false,
			txt: '일반인',
		},
		{
			id: 6,
			active: false,
			txt: '선택안함',
		},
	]);
	const clickTag = id => {
		const result = tagList.map(tag => {
			if (tag.id === id) {
				return { ...tag, active: true };
			} else {
				return { ...tag, active: false };
			}
		});
		setTageList(result);
	};
	return (
		<div className="h-100vh">
			<StackHeader />
			<div className="pt15 bothSpace">
				<div className="mb36">
					<h5 className="weight500">현재 직업은 무엇인가요</h5>
				</div>
				<div className="">
					<div className="content-scroll-container">
						<div className="mb22">
							<SerchInput placeholder={'직접입력 (ex: 디자이너, 개발자, 번역가 등)'} />
						</div>

						<div className="tag-wrap">
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
					</div>

					<div className="pos-bottom">
						<BackBtn btnTxt="다음" />
					</div>
				</div>
			</div>
		</div>
	);
}
