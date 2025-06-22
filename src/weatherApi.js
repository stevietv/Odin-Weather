const apiKey = "5CDNM82VZU94Z4H7RFKUYE3WU";
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function getWeatherForLocation(location) {
  try {
    let response = await fetch(`${baseUrl}${location}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: apiKey }),
    });
    return await response.json();
  }
  catch (error) {
    console.log(error);
  }
}