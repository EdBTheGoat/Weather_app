import React from 'react';
import styles from '../css/App.module.css';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import geocoding from '../api/geocoding';
import weather from '../api/weather';

class App extends React.Component {
	state = { city: '', country: '', temp: '', weatherCondition: '' };

	onSearchSubmit = async (city) => {
		const res = await geocoding.get('', {
			params: { q: city },
		});

		this.setState({ city: res.data[0].name });
		this.setState({ country: res.data[0].country });

		const res2 = await weather.get('', {
			params: { lat: res.data[0].lat, lon: res.data[0].lon },
		});

		console.log(res2.data.daily);

		//Today weather data being set to state

		this.setState({ temp: Math.floor(res2.data.current.temp) });
		this.setState({ weatherCondition: res2.data.current.weather[0].description });

		//Forecast weather data being set to state
	};

	render() {
		return (
			<div className={styles.mainDiv}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<CurrentWeather
					city={this.state.city}
					country={this.state.country}
					temp={this.state.temp}
					weatherCondition={this.state.weatherCondition}
				/>
				<Forecast />
			</div>
		);
	}
}

export default App;
