async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '93f2f15d5ab0f14b0e1f1d03589ede84'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById('weatherData').innerHTML = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById('weatherData').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
