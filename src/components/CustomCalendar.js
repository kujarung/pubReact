import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CustomCalendar() {
	return (
		<div>
			<Calendar
				className={'custom-calendar'}
				value={new Date()}
				value={[new Date(2020, 9, 1), new Date(2020, 9, 20)]}
			/>
		</div>
	);
}
