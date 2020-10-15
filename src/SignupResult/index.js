import React from 'react';
import { icRest, avatar } from 'components/ImgUtils';
import BackBtn from 'components/BackBtn';

export default function SignupResult() {
	return (
		<div className="h-100vh">
			<div className="bothSpace">
				<div className="mb65 pt99">
					<div className="bottom-small-line">
						<h2 className="samll fontAvenirBold">Welcome!</h2>
					</div>
				</div>
				<div className="avatar-img-con mb30">
					<img src={avatar} alt="" />
				</div>
				<div className="">
					<div className="rest-icon mb11">
						<img src={icRest} alt="ic-rest" />
					</div>
					<h6 className="weight100 line-h26">
						안녕하세요, <span className="weight500">닉네임</span>님!
						<br />
						리딩퍼센트에 합류하신 것을 진심으로 <span className="weight500">환영합니다</span> :)
						<br />
						장벽을 무너뜨리는 그 날까지 <span className="weight500">함께</span>
						해요!
					</h6>
				</div>
				<div className="pos-bottom small-no-absol-bottom mt-small-50 mb-small-30">
					<BackBtn btnTxt="확인" />
				</div>
			</div>
		</div>
	);
}
