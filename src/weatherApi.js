const apiKey = "5CDNM82VZU94Z4H7RFKUYE3WU";
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function getWeatherForLocation(location, units) {
  try {
    let response = await fetch(`${baseUrl}${location}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: apiKey,
        unitGroup: units,
      }),
    });
    let data = await response.json();
    return processWeather(data);
  }
  catch (error) {
    console.log(error);
  }
}

function processWeather(data) {
  console.log(data);
  return {
    location: data.resolvedAddress,
    description: data.description,
    days: [
      processDay(data.days[0]),
      processDay(data.days[1]),
      processDay(data.days[2]),
      processDay(data.days[3]),
      processDay(data.days[4]),
      processDay(data.days[5]),
      processDay(data.days[6])
    ]
  }
}

function processDay(dailyData) {
  return {
    high: dailyData.tempmax,
    low: dailyData.tempmin,
    icon: dailyData.icon
  }
}