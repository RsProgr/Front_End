const apiKey = '57d1fc9e0b14b9cb770c5bb2294884bb';
const cityInput = document.querySelector('#city-input');
const getWeatherBtn = document.querySelector('#get-weather-btn');
const weatherDataDiv = document.querySelector('#weather-data');
const loader = document.querySelector('#loader');

const getWeather = async () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert('Пожалуйста, введите название города');
    return;
  }

  loader.style.display = 'block';
  weatherDataDiv.innerHTML = '';

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    loader.style.display = 'none';

    if (!response.ok) {
      const errorData = await response.json();
      weatherDataDiv.innerHTML = `<p class="error">Ошибка ${errorData.cod}: ${errorData.message}</p>`;
      return;
    }

    const data = await response.json();
    const { name, main, weather } = data;
    const temperature = Math.round(main.temp); // Округляем температуру
    const weatherIcon = weather[0].icon;
    const weatherDescription = weather[0].description;

    // Использование innerHTML для добавления элементов
    weatherDataDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Температура: ${temperature}°C</p>
      <p>Погода: ${weatherDescription}</p>
      <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Иконка погоды" class="weather-icon">
    `;
  } catch (error) {
    loader.style.display = 'none';
    weatherDataDiv.innerHTML = `<p class="error">Не удалось получить данные. Пожалуйста, попробуйте позже.</p>`;
  }
};

getWeatherBtn.addEventListener('click', getWeather);