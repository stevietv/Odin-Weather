import { format } from 'date-fns';

const weatherContainer = document.querySelector('.weatherContainer');

export function displayWeather(data) {
  weatherContainer.innerHTML = '';
  let weatherHeader = createWeatherHeader(data)
  weatherContainer.appendChild(weatherHeader);

  let weatherDaysContainer = document.createElement('div');
  weatherDaysContainer.classList.add('weather-days');
  weatherContainer.appendChild(weatherDaysContainer);

  data.days.forEach(day => {
    weatherDaysContainer.appendChild(createWeatherBlock(day));
  })
}

function createWeatherHeader(data) {
  let weatherHeader = document.createElement('div');
  weatherHeader.classList.add('weather-header');
  weatherHeader.textContent = data.location;

  return weatherHeader;
}

function createWeatherBlock(day) {
  let weatherBlock = document.createElement('div');
  weatherBlock.classList.add('weather-block');

  let dayContainer = document.createElement('div');
  dayContainer.classList.add('day');
  dayContainer.textContent = format(new Date(day.dateTime), 'ccc');

  weatherBlock.appendChild(dayContainer);

  let iconContainer = document.createElement('img');
  iconContainer.classList.add('icon');
  //iconContainer.src = icons(`./${day.icon}.png`);

  import(`./assets/${day.icon}.png`)
    .then((module) => {
      iconContainer.src = module.default;
    })
    .catch((error) => {
      console.log('Error loading icon: ', error);
    })

  weatherBlock.appendChild(iconContainer);

  let temperatureContainer = document.createElement('div');
  temperatureContainer.classList.add('temperature');
  temperatureContainer.textContent = `${day.high} / ${day.low}`;

  weatherBlock.appendChild(temperatureContainer);

  return weatherBlock;
}

export function displayError() {
  weatherContainer.classList.add('error');
  weatherContainer.textContent = 'Unknown Location';
}