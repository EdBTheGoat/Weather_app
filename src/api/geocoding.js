import axios from 'axios';
const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default axios.create({
	baseURL: `https://api.openweathermap.org/geo/1.0/direct?&limit=1&appid=${WEATHER_KEY}`,
});
