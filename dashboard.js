function showLocationData() {
  hideAllTabs();
  document.getElementById("location-data").classList.add("active");
}

function showAwareness() {
  hideAllTabs();
  document.getElementById("awareness").classList.add("active");
}

function showCounsellingServices() {
  hideAllTabs();
  document.getElementById("counselling-services").classList.add("active");
}

function hideAllTabs() {
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

function openSafeSpaceEmail() {
  const receiver = "example@example.com"; // Replace with the recipient's email address
  const subject = "Requesting Safespace";
  const body = "Hello,\n\nI need a safespace.\n\nBest regards, [Your Name]";

  const mailtoLink = `mailto:${receiver}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

function callPolice() {
  alert("Please call the police immediately for emergency assistance.");
  // You can replace this alert with code to send a text message, but it's not recommended from a security perspective.
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 34.04924594193164, lng: -118.24104309082031 },
  });
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
}

window.initMap = initMap;
