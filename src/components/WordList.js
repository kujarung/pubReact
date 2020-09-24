import React from 'react';
import { peopleBack } from '../components/ImgUtils';

export default function WordList(props) {
	const { isProbleam } = props;
	return (
		<div className="horiz-item wold">
			<div className="horiz-inner">
				<div className="horiz-top">
					<div className="horiz-ima-box">
						<img src={`${peopleBack}`} alt="" />
					</div>
					<div className="word-txt-con">
						{isProbleam ? (
							<>
								<div className="word-title">compensation</div>

								<div className="word-content">
									Despite growth of the Internet over the past seven years, the use of toll-free
									phone numbers
								</div>
							</>
						) : (
							<>
								<div className="word-title">
									The Mauritius government is seeking <span className="inner-empty" /> from the
									company.
								</div>

								<div className="word-desc">보상(금), (좋지 않은 점을 완화해주는) 보상</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
