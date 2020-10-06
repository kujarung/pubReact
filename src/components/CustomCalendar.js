import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CustomCalendar() {
	return (
		<div className="custom-calendar-wrap">
			<Calendar
				calendarType={'US'}
				locale={'kr'}
				className={'custom-calendar'}
				showNavigation={false}
				value={[new Date(2020, 9, 1), new Date(2020, 9, 20)]}
			/>
		</div>
	);
}
