const apiKey = "935a6fb602d17512bf3e5391c4f26478"; // replace with your OpenWeather API key
const lat = 40.2338;  // Example: Provo, UT
const lon = -111.6585;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) throw new Error("Weather fetch failed");
    const data = await response.json();

    // Current weather (first forecast item)
    document.querySelector("#current-temp").textContent = 
      `Temp: ${data.list[0].main.temp.toFixed(1)} °F`;
    document.querySelector("#current-desc").textContent = 
      `Conditions: ${data.list[0].weather[0].description}`;

    // 3-day forecast (use noon each day)
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = "";
    const noonForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    noonForecasts.forEach(day => {
  const date = new Date(day.dt_txt);
  const div = document.createElement("div");
  div.classList.add("forecast-day"); // for styling
  div.innerHTML = `
    <h4>${date.toDateString()}</h4>
    <p>Temp: ${day.main.temp.toFixed(1)} °F</p>
    <p>${day.weather[0].description}</p>
  `;
  forecastContainer.appendChild(div);
});


getWeather();
