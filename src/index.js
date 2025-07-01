import './styles.css';
import './resetStyles.css';
import { getWeatherForLocation } from './weatherApi';
import { displayWeather, displayError } from './displayWeather';
import { showLoading, hideLoading } from './loader';

let units = 'metric';
let currentLocation = '';

searchWeather("Amsterdam");

const searchForm = document.querySelector('#searchForm');
const searchInput = document.getElementById('searchInput');
const celciusButton = document.querySelector('#celciusButton');
const farenheitButton = document.querySelector('#fahrenheitButton');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchWeather(searchInput.value);
})


celciusButton.addEventListener('click', () => {
  units = 'metric';
  celciusButton.classList.add('active');
  farenheitButton.classList.remove('active');
  searchWeather(currentLocation);
})

farenheitButton.addEventListener('click', () => {
  units = 'us';
  celciusButton.classList.remove('active');
  farenheitButton.classList.add ('active');
  searchWeather(currentLocation);
})


async function searchWeather(location) {
  currentLocation = location;
  showLoading();
  try {
    let weather = await getWeatherForLocation(location, units);
    displayWeather(weather);
    hideLoading();
  }
  catch (error) {
    if (error.status === 400) {
      hideLoading();
      displayError();
    }
  }
}
