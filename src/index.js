import './styles.css';
import './resetStyles.css';
import { getWeatherForLocation } from './weatherApi';
import { displayWeather, displayError } from './displayWeather';

let units = 'metric';

searchWeather("Jirnsum");

const searchButton = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
searchButton.addEventListener('click', () => {
  searchWeather(searchInput.value);
})

async function searchWeather(location) {
  try {
    let weather = await getWeatherForLocation(location, units);
    displayWeather(weather);
  }
  catch (error) {
    if (error.status === 400) {
      displayError();
    }
  }
}
