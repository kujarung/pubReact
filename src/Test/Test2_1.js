import React, {useState} from 'react';
import Steps from 'components/Steps';
import StackHeader from 'components/StackHeader';
import BackBtn from 'components/BackBtn';
import AnserBtn from 'components/AnserBtn';

export default function Test2_1() {
	const [anser, setAnser] = useState({
		one: true,
		two: false,
		three: false,
		four: false,
		five: false
	})

	const clickSelectItem = (id) => {
		Object.keys(anser).map(item => item === id ? anser[item] = true :  anser[item] = false)
		console.log(anser)
		setAnser({...anser})
	}	
	return (
		<div className="h-100vh">
			<StackHeader />
			<div className="bothSpace pt71">
				<div className="mb30">
					<Steps steps={3} activeStep={2} />
				</div>

				<div className="d-flex mb21 x-eq y-center">
					<div className="d-flex">
						<h2 className="small step-underline mr5 fontAvenirBold">Q</h2>
						<h2 className="weight500 fontAvenirBold">1</h2>
					</div>
					<div className="self-y-start">
						<h6 className="color-gray">1 of 5</h6>
					</div>
				</div>

				<h5 className="weight500 mb8">procrastinate</h5>
				<h6 className="color-gray">/proʊ|kræstɪneɪt/</h6>
			</div>

			<div className="pos-bottom small-no-absol">
				<div className="has-check mb20">
					<AnserBtn btnTxt={'gunman'} active={anser["one"]}  clickSelectItem ={clickSelectItem} id={'one'} />
					<AnserBtn btnTxt={'assailants'} active={anser["two"]} clickSelectItem ={clickSelectItem} id={'two'}/>
					<AnserBtn btnTxt={'carjacked'} active={anser["three"]}  clickSelectItem ={clickSelectItem} id={'three'} />
					<AnserBtn btnTxt={'suspect'} active={anser["four"]}  clickSelectItem ={clickSelectItem} id={'four'} />
					<AnserBtn btnTxt={'robbers'} active={anser["five"]}  clickSelectItem ={clickSelectItem} id={'five'} />
				</div>
				<BackBtn btnTxt="다음" />
			</div>
		</div>
	);
}
