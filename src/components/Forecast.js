import React from 'react';
import styles from '../css/Forecast.module.css';
import weatherCode from './weatherCode';

const Forecast = (props) => {
	const forecast = props.forecast.map(({ dt, temp, weather }, i) => {
		let dayName = new Date(dt * 1000).toLocaleDateString('en', { weekday: 'short' });
		if (i === 0) {
			console.log('Current day already displayed');
		}
		return (
			<div className={styles.boxes}>
				<h1>{dayName}</h1>
				<div>{weatherCode(weather[0].id)}</div>
				<div className={styles.tempNum}>{Math.round(temp.max)}</div>
			</div>
		);
	});

	return <div className={styles.mainBox}>{forecast}</div>;
};

export default Forecast;
