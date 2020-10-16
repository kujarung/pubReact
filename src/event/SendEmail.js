import React from 'react';
import StackHeader from 'components/StackHeader';
import Checkbox from '../components/Checkbox';
import BackBtn from 'components/BackBtn';

export default function SendEmail(props) {
	return (
		<>
			<StackHeader />
			<div className="bothSpace mt29 mb30">
				<h3 className="weight500">이메일 문의</h3>
			</div>

			<div className="bothSpace mb20">
				<div className="mb20">
					<h6 className="reqired weight400 mb6">문의 분류</h6>
					<div className="email-select-con">
						<select>
							<option value="1">카테고리 선택</option>
							<option value="2">2</option>
						</select>
					</div>
				</div>

				<div className="mb20">
					<h6 className="reqired weight400 mb6">이메일 주소</h6>
					<div className="email-input-con">
						<input type="email" />
					</div>
				</div>

				<div className="mb20">
					<h6 className="weight400 mb6">휴대폰 번호</h6>
					<div className="email-input-con">
						<input type="number" />
					</div>
				</div>

				<div className="mb20">
					<h6 className="weight400 mb6 reqired">문의 내용</h6>
					<div className="email-textarea">
						<textarea></textarea>
					</div>
				</div>

				<div className="mb20">
					<div class="filebox mb6">
						<label for="file">첨부파일 추가</label>
						<input type="file" id="file" />
					</div>

					<div className="desc-font">
						0MB첨부파일은 최대 5개, 10MB까지 등록 가능하며
						<br />
						파일 형식은 jpg, gif, psd, png, tif, zip, ms office, 아래한글(hwp), pdf 만 가능합니다.
					</div>
				</div>
			</div>

			<div className="mb10 desc-font" style={{ padding: '10px 20px', backgroundColor: '#F5F6FA' }}>
				문의하신 내용에 대한 원인파악 및 원활할 상담을 위하여 이메일, 휴대폰번호를 수집합니다.
				수집된 개인정보는 문의 접수일 기주능로 3년간 보관 후 파기됩니다. 더 자세한 내용에 대해서는
				<a href="#" className="weight500 desc-font">
					리딩퍼센트 개인정보처리방침
				</a>
				을 참고하시기 바랍니다.
			</div>
			<div className="mb27 bothSpace">
				<Checkbox checkbox={{ id: 1, txt: '위 내용에 동의합니다.' }} />
			</div>

			<div className="bothSpace mb30">
				<BackBtn btnTxt={'문의접수'} />
			</div>
		</>
	);
}
