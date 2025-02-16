const key = 'cd96c75ec2dc6b8345deb358e82fa50e';

async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      updateUI(data);
    } else {
      alert('City not found.');
    }
  } catch (error) {
    console.error('Error');
  }
}

function updateUI(data) {
  const cityName = data.name;
  const weather = data.weather[0];
  const temp = data.main.temp - 273.15;
  const iconCode = weather.icon;

  document.getElementById('city-name').textContent = cityName;
  document.getElementById(
    'temperature'
  ).textContent = `Temperature: ${temp.toFixed(2)}°C`;
  document.getElementById(
    'weather-icon'
  ).src = `http://openweathermap.org/img/wn/${iconCode}.png`;
}

document
  .getElementById('city-input')
  .addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const city = e.target.value.trim();
      if (city) {
        getWeather(city);
      }
    }
  });

document.querySelector('.search').addEventListener('click', function () {
  const city = document.getElementById('city-input').value.trim();
  if (city) {
    getWeather(city);
  }
});
