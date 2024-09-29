const ship = {
  name: "Starship",
  manufacturer: "SpaceX",
  crew: 6,
  maxSpeed: "27,000 km/h",
};

const shipName = document.querySelector("#Name");
const shipManufacturer = document.querySelector("#Manufacturer");
const shipCrew = document.querySelector("#CrewCapacity");
const shipMaxSpeed = document.querySelector("#MaximumSpeed");
const toggleManufacturerButton = document.querySelector("#toggleManufacturer");

shipName.textContent = `Name: ${ship.name}`;
shipManufacturer.textContent = `Manufacturer: ${ship.manufacturer}`;
shipCrew.textContent = `Crew Capacity: ${ship.crew}`;
shipMaxSpeed.textContent = `Maximum Speed: ${ship.maxSpeed}`;

toggleManufacturerButton.addEventListener("click", () => {
  if (shipManufacturer.style.display === "none") {
    shipManufacturer.style.display = "block";
    toggleManufacturerButton.textContent = "Hide Manufacturer";
  } else {
    shipManufacturer.style.display = "none";
    toggleManufacturerButton.textContent = "Show Manufacturer";
  }
});
