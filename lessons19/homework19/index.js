const apiKey = '57d1fc9e0b14b9cb770c5bb2294884bb'; // Ваш API ключ
const cityInput = document.querySelector('#city-input'); // Используем querySelector
const getWeatherBtn = document.querySelector('#get-weather-btn'); // Используем querySelector
const weatherDataDiv = document.querySelector('#weather-data'); // Используем querySelector
const loader = document.querySelector('#loader'); // Используем querySelector

const getWeather = async () => {
  const city = cityInput.value.trim(); // Убираем лишние пробелы

  if (!city) {
    alert('Пожалуйста, введите название города'); // Сообщение, если город не введён
    return;
  }

  loader.style.display = 'block'; // Показать индикатор загрузки
  weatherDataDiv.innerHTML = ''; // Очистка предыдущего результата

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    loader.style.display = 'none'; // Скрыть индикатор загрузки

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Ошибка ${errorData.cod}: ${errorData.message}`;
      errorMessage.classList.add('error');
      weatherDataDiv.append(errorMessage);
      return;
    }

    const data = await response.json();
    const { name, main, weather } = data;
    const temperature = main.temp;
    const weatherIcon = weather[0].icon;
    const weatherDescription = weather[0].description;

    const cityNameElement = document.createElement('h2');
    cityNameElement.textContent = name;

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Температура: ${temperature}°C`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Погода: ${weatherDescription}`;

    const weatherIconElement = document.createElement('img');
    weatherIconElement.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
    weatherIconElement.alt = 'Иконка погоды';
    weatherIconElement.classList.add('weather-icon');

    // Добавляем элементы в weatherDataDiv
    weatherDataDiv.append(cityNameElement, temperatureElement, descriptionElement, weatherIconElement);

  } catch (error) {
    loader.style.display = 'none';
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Не удалось получить данные. Пожалуйста, попробуйте позже.';
    errorMessage.classList.add('error');
    weatherDataDiv.append(errorMessage);
  }
};

getWeatherBtn.addEventListener('click', getWeather);