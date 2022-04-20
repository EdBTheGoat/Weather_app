import React from 'react';
import styles from '../css/App.module.css';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import geocoding from '../api/geocoding';
import weather from '../api/weather';

class App extends React.Component {
	state = { city: '', country: '', temp: '', weatherCondition: '', forecast: [], id: 0 };

	onSearchSubmit = async (city) => {
		const res = await geocoding.get('', {
			params: { q: city },
		});

		//Name of city and country being set to state from geocoding API
		this.setState({ city: res.data[0].name });
		this.setState({ country: res.data[0].country });

		const res2 = await weather.get('', {
			params: { lat: res.data[0].lat, lon: res.data[0].lon },
		});

		console.log(res2.data);

		//Today weather data being set to state from oneCallWeather Api
		this.setState({ temp: Math.round(res2.data.daily[0].temp.max) });
		this.setState({ weatherCondition: res2.data.daily[0].weather[0].description });
		this.setState({ id: res2.data.daily[0].weather[0].id });
		console.log(this.id);

		//Forecast weather data being set to state from oneCallWeather Api
		this.setState({ forecast: res2.data.daily });
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
						id={this.state.id}
					/>
					<Forecast forecast={this.state.forecast} />
				</div>
			</div>
		);
	}
}

export default App;
