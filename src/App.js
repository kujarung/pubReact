import React, { useState } from 'react';
import RouterLink from './Router';
import Drawer from 'components/Drawer';

export default function App() {
	const [isActive, setIsActive] = useState(false);
	const openDrawer = val => {
		setIsActive(!isActive);
	};
	const closeDrawer = () => {
		setIsActive(false);
	};
	return (
		<>
			<Drawer isActive={isActive} closeDrawer={closeDrawer} />
			<div className={isActive ? 'main no-scroll' : 'main'}>
				<div
					className={isActive ? 'drawer-dim active' : 'drawer-dim'}
					onClick={() => closeDrawer()}
				/>

				<RouterLink openDrawer={openDrawer} />
			</div>
		</>
	);
}
