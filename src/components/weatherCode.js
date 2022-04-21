import React from 'react';
import styles from '../css/weatherCode.module.css';

const weatherCode = (id) => {
	switch (id) {
		case '11d':
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="thunder"
						key="thunder"
						src={require('../images/thunderstorm.png')}
					/>
				</div>
			);
		case '10d':
		case '09d':
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="rain"
						key="rain"
						src={require('../images/rain.png')}
					/>
				</div>
			);
		case '13d':
			return (
				<div>
					<img alt="snow" key="snow" src={require('../images/snow.png')} />
				</div>
			);
		case '50d':
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="mist"
						key="mist"
						src={require('../images/mist.png')}
					/>
				</div>
			);
		case '01d':
		case '01n':
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="clear"
						key="clear"
						src={require('../images/clear.png')}
					/>
				</div>
			);
		case '02d':
		case '02n':
		case '03d':
		case '03n':
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="partial_cloudy"
						key="partial_cloudy"
						src={require('../images/partial_cloudy.png')}
					/>
				</div>
			);
		case '04d':
		case '04n':
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="cloudy"
						key="cloudy"
						src={require('../images/cloudy.png')}
					/>
				</div>
			);
		default:
			console.log('no weather image avaliable');
	}
};

export default weatherCode;
