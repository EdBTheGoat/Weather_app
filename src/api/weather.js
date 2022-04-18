import axios from 'axios';
const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default axios.create({
	baseURL: `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&units=imperial&appid=${WEATHER_KEY}`,
});
