const apiKey = '57d1fc9e0b14b9cb770c5bb2294884bb';
const cityInput = document.querySelector('#city-input'); 
const getWeatherBtn = document.querySelector('#get-weather-btn'); 
const weatherDataDiv = document.querySelector('#weather-data'); 
const loader = document.querySelector('#loader'); 

const displayError = (message) => {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.classList.add('error');
  weatherDataDiv.append(errorMessage);
};

const createWeatherElement = (tag, text, src) => {
  const element = document.createElement(tag);
  if (src) {
    element.src = src;
    element.alt = 'Иконка погоды';
    element.classList.add('weather-icon');
  } else {
    element.textContent = text;
  }
  return element;
};

const getWeather = async () => {
  const city = cityInput.value.trim();
  if (!city) return alert('Пожалуйста, введите название города');

  loader.style.display = 'block';
  weatherDataDiv.innerHTML = '';

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    loader.style.display = 'none';

    if (!response.ok) {
      const { cod, message } = await response.json();
      displayError(`Ошибка ${cod}: ${message}`);
      return;
    }

    const { name, main: { temp }, weather } = await response.json();
    weatherDataDiv.append(
      createWeatherElement('h2', name),
      createWeatherElement('p', `Температура: ${temp}°C`),
      createWeatherElement('p', `Погода: ${weather[0].description}`),
      createWeatherElement('img', null, `http://openweathermap.org/img/w/${weather[0].icon}.png`)
    );

  } catch {
    loader.style.display = 'none';
    displayError('Не удалось получить данные. Пожалуйста, попробуйте позже.');
  }
};

getWeatherBtn.addEventListener('click', getWeather);