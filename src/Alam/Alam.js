import React from 'react';
import StackHeader from 'components/StackHeader';
import { alarm, alarmD } from 'components/ImgUtils';

export default function Alam() {
	const dotList = [
		{
			title: '모두 읽은 상태로 표시',
			active: false,
		},
		{
			title: '읽은 알림 삭제',
			active: true,
		},
	];
	return (
		<div className="h-100vh">
			<StackHeader rightItem="selector" dotList={dotList} />
			<div className="bothSpace mt29 mb20">
				<h3 className="weight500">주요알림</h3>
			</div>

			<div className="bothSpace">
				<div className="shadow-box mb20">
					<div className="repeact-con alam">
						<div className="repeact-row no-row">
							<div className="mr10 alam-img-con" style={{ backgroundImage: `url(${alarm})` }} />

							<div className="alam-content">
								<h5 className="small weight300">장애 발생 및 처리 결과 안내</h5>
								<div className="h7 color-gray">2020년 12월 01일 오후 2:12:12</div>
							</div>
						</div>
					</div>
				</div>

				<div className="shadow-box mb20">
					<div className="repeact-con alam">
						<div className="repeact-row no-row">
							<div className="mr10 alam-img-con" style={{ backgroundImage: `url(${alarm})` }}></div>

							<div className="alam-content">
								<h5 className="small weight300">
									장애 발생 및 처리 결과 안내>장애 발생 및 처리 결과 안내>장애 발생 및 처리 결과
									안내
								</h5>
								<div className="h7 color-gray">2020년 12월 01일 오후 2:12:12</div>
							</div>
						</div>
					</div>
				</div>

				<div className="shadow-box mb20">
					<div className="repeact-con alam read">
						<div className="repeact-row no-row">
							<div
								className="mr10 alam-img-con"
								style={{ backgroundImage: `url(${alarmD})` }}
							></div>

							<div className="alam-content">
								<h5 className="small weight300">장애 발생 및 처리 결과 안내</h5>
								<div className="h7 color-gray">2020년 12월 01일 오후 2:12:12</div>
							</div>
						</div>
					</div>
				</div>

				<div className="shadow-box mb20">
					<div className="repeact-con alam read">
						<div className="repeact-row no-row">
							<div
								className="mr10 alam-img-con"
								style={{ backgroundImage: `url(${alarmD})` }}
							></div>

							<div className="alam-content">
								<h5 className="small weight300">장애 발생 및 처리 결과 안내</h5>
								<div className="h7 color-gray">2020년 12월 01일 오후 2:12:12</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
