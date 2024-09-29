// Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив). Значения массива [100, 400, 900, 300, 500].
// Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
// Стилизация на ваше усмотрение
// Дополнительная задача: Создайте кнопку "Filter", при нажатии на которую на странице будут отображаться только блоки с ценами > 450
// Массив с ценами на товар

const prices = [100, 400, 900, 300, 500];

const priceContainer = document.querySelector(".price-container");
const filterButton = document.querySelector(".filter-button");
const showAllButton = document.querySelector(".show-all-button");

const displayPrices = (priceArray) => {
  priceContainer.innerHTML = "";

  priceArray.forEach((price) => {
    const priceBox = document.createElement("div");
    priceBox.textContent = price;
    priceBox.classList.add("price-box");
    priceContainer.append(priceBox);
  });
};

displayPrices(prices);

const filterPrices = () => {
  const filteredPrices = prices.filter((price) => price > 450);
  displayPrices(filteredPrices);

  filterButton.classList.add("hidden");
  showAllButton.classList.remove("hidden");
};

const showAllPrices = () => {
  displayPrices(prices);

  showAllButton.classList.add("hidden");
  filterButton.classList.remove("hidden");
};

filterButton.addEventListener("click", filterPrices);
showAllButton.addEventListener("click", showAllPrices);
