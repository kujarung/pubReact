import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CustomCalendar() {
	return (
		<div className="custom-calendar-wrap">
			<Calendar
				className={'custom-calendar'}
				showNavigation={false}
				value={new Date()}
				value={[new Date(2020, 9, 1), new Date(2020, 9, 20)]}
			/>
		</div>
	);
}
