import React from 'react';
import styles from '../css/App.module.css';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import geocoding from '../api/geocoding';
import weather from '../api/weather';

class App extends React.Component {
	state = {
		city: '',
		country: '',
		temp: '',
		weatherCondition: '',
		forecast: [],
		icon: '',
	};

	onSearchSubmit = async (city) => {
		const res = await geocoding.get('', {
			params: { q: city },
		});
		const res2 = await weather.get('', {
			params: { lat: res.data[0].lat, lon: res.data[0].lon },
		});
		this.setState({
			city: res.data[0].name,
			country: res.data[0].country,
			temp: Math.round(res2.data.daily[0].temp.max),
			weatherCondition: res2.data.daily[0].weather[0].description,
			icon: res2.data.daily[0].weather[0].icon,
			forecast: res2.data.daily,
		});
	};

	render() {
		return (
			<div className={styles.mainDiv}>
				<div className={styles.container}>
					<SearchBar onSubmit={this.onSearchSubmit} />
					<CurrentWeather
						city={this.state.city}
						country={this.state.country}
						temp={this.state.temp}
						weatherCondition={this.state.weatherCondition}
						icon={this.state.icon}
					/>
					<Forecast forecast={this.state.forecast} />
				</div>
			</div>
		);
	}
}

export default App;
