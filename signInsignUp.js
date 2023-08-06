const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// Global variable to store selected locations
let selectedLocations = [];

function addLocation() {
  const locationSelect = document.getElementById('location-select');
  const selectedLocation = locationSelect.value;

  if (!selectedLocation) {
    alert('Please select a location.');
    return;
  }

  // Check if the location is already selected
  if (selectedLocations.includes(selectedLocation)) {
    alert('This location is already selected.');
    return;
  }

  // Add the selected location to the list
  selectedLocations.push(selectedLocation);
  updateSelectedLocationsList();
}

function updateSelectedLocationsList() {
  const selectedLocationsList = document.getElementById('selected-locations-list');
  selectedLocationsList.innerHTML = '';

  // Update the list of selected locations
  for (const location of selectedLocations) {
    const listItem = document.createElement('li');
    listItem.textContent = location;
    selectedLocationsList.appendChild(listItem);
  }
}

