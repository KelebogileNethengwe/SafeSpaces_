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
