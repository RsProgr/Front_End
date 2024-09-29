document.addEventListener("DOMContentLoaded", function() {
    let carList = document.getElementById("car-list");

    let newCarStart = document.createElement("li");
    newCarStart.textContent = "Aurus(new car)";
    carList.insertBefore(newCarStart, carList.firstChild);

    let newCarEnd = document.createElement("li");
    newCarEnd.textContent = "Cadillac(new car)";
    carList.appendChild(newCarEnd);

    if (carList.children.length > 1) {
        carList.children[2].textContent = "Skoda";
    }

    if (carList.children.length > 1) {
        carList.removeChild(carList.children[3]);
    }
});