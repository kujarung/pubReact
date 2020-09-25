import React, { useState } from 'react';
import { arrUp, arrDwon } from 'components/ImgUtils';

export default function Accordion() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className={isOpen ? 'accodion-row active' : 'accodion-row'}>
				<div className="accodion-question" onClick={() => setIsOpen(!isOpen)}>
					<h6>
						<span className="weight500">Q.</span> 질문 제목
					</h6>

					<div className="">
						<img src={isOpen ? arrUp : arrDwon} alt="" style={{ width: '30px' }} />
					</div>
				</div>

				<div className="accodion-anser">
					<div className="h7">
						A. <br />
						답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변
						내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용 답변 내용
						답변 내용 답변 내용
					</div>
				</div>
			</div>
		</>
	);
}
