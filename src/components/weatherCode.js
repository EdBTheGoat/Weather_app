import React from 'react';
import styles from '../css/weatherCode.module.css';

const weatherCode = (id) => {
	switch (id) {
		case 200:
		case 201:
		case 202:
		case 210:
		case 211:
		case 212:
		case 221:
		case 230:
		case 231:
		case 232:
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
		case 300:
		case 301:
		case 302:
		case 310:
		case 311:
		case 312:
		case 313:
		case 314:
		case 321:
			return (
				<div>
					<img
						className={styles.weatherIcon}
						alt="drizzle"
						key="drizzle"
						src={require('../images/drizzle.png')}
					/>
				</div>
			);
		case 500:
		case 501:
		case 502:
		case 503:
		case 504:
		case 511:
		case 520:
		case 521:
		case 522:
		case 531:
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
		case 600:
		case 601:
		case 602:
		case 611:
		case 612:
		case 613:
		case 615:
		case 616:
		case 620:
		case 621:
		case 622:
			return (
				<div>
					<img alt="snow" key="snow" src={require('../images/snow.png')} />
				</div>
			);
		case 701:
		case 711:
		case 721:
		case 731:
		case 741:
		case 751:
		case 761:
		case 762:
		case 771:
		case 781:
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
		case 800:
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
		case 801:
		case 802:
		case 803:
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
		case 804:
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
