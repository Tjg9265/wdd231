const apiKey = "YOUR_API_KEY"; // replace with your OpenWeather API key
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
      div.innerHTML = `
        <strong>${date.toDateString()}</strong><br>
        ${day.main.temp.toFixed(1)} °F<br>
        ${day.weather[0].description}
      `;
      forecastContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Weather error:", error);
  }
}

getWeather();
