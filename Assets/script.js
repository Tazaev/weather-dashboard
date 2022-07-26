// dependencies
function myWeatherDashboard() {
  const city = document.getElementById("search-city");
  const search = document.getElementById("searchBtn");
  const clearSearch = document.getElementById("clear-history");
  const currentName = document.getElementById("city");
  const currentImg = document.getElementById("current-pic");
  const currentTemp = document.getElementById("temperature");
  const currentHumidity = document.getElementById("humidity");
  const currentWind = document.getElementById("wind-speed");
  const currentUV = document.getElementById("UV-index");
  const history = document.getElementById("history");
  var nextFiveDays = document.getElementById("fiveday-header");
  var todayweather = document.getElementById("today-weather");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
}
