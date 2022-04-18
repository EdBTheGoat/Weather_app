import React from 'react';
import styles from '../css/CurrentWeather.module.css';

class CurrentWeather extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.city !== this.props.city) {
		}
	}

	hello() {
		return (
			<div className={`${styles.mainDiv} ${'ui card'} `}>
				<div className={styles.left}>
					<div>Image</div>
				</div>
				<div className={styles.right}>
					<div>Today</div>
					<h2>
						{this.props.city}, {this.props.country}
					</h2>

					<div>Temperature: {this.props.temp}</div>
					<div>{this.props.weatherCondition}</div>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.props.city === '' ? '' : this.hello()}</div>;
	}

	// console.log(cityInfo);
}

export default CurrentWeather;
