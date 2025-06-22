import './styles.css';
import './resetStyles.css';
import { getWeatherForLocation } from './weatherApi';

console.log(await getWeatherForLocation("Jirnsum"));
