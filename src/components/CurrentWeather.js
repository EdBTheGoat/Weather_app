import React from 'react';
import styles from '../css/CurrentWeather.module.css';
import weatherCode from './weatherCode';

class CurrentWeather extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.city !== this.props.city) {
		}
	}

	weatherInfo() {
		console.log(this.props.id);
		return (
			<div className={styles.mainDiv}>
				<div className={styles.weatherInfo}>
					<div className={styles.left}>
						<div>{weatherCode(this.props.id)}</div>
					</div>
					<div className={styles.right}>
						<div className={styles.topText}>Today</div>
						<h2 className={styles.cityName}>
							{this.props.city}, {this.props.country}
						</h2>
						<div className={styles.bottomText}>Temperature: {this.props.temp}</div>
						<br />
						<div className={styles.bottomText}>{this.props.weatherCondition}</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.props.city === '' ? '' : this.weatherInfo()}</div>;
	}

	// console.log(cityInfo);
}

export default CurrentWeather;
