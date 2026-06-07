const apiKey = "d66cab08fadad044af2848730a438870"; // replace with your working key

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod === 200) {
                result.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>🌡️ Temperature: ${data.main.temp}°C</p>
                    <p>🤒 Feels Like: ${data.main.feels_like}°C</p>
                    <p>☁️ Weather: ${data.weather[0].description}</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>🌬️ Wind: ${data.wind.speed} m/s</p>
                `;
            } else {
                result.innerHTML = "❌ City not found";
            }
        })
        .catch(() => {
            result.innerHTML = "❌ Error fetching weather data";
        });
}