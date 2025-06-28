import './styles.css';
import './resetStyles.css';
import { getWeatherForLocation } from './weatherApi';
import { displayWeather } from './displayWeather';

let weather = await getWeatherForLocation("Jirnsum", 'metric');
console.log(weather);
displayWeather(weather);
