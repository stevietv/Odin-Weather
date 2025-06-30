import './styles.css';
import './resetStyles.css';
import { getWeatherForLocation } from './weatherApi';
import { displayWeather, displayError } from './displayWeather';

let units = 'metric';

searchWeather("Jirnsum");

const searchForm = document.querySelector('#searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
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
