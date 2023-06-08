function getWeather() {
    var cityName = document.getElementById("cityInput").value;
    var apiKey = "8645fe3175af1fb88e628eeef2efa1d0";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log("Error fetching weather data:", error);
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = "";

    var cityName = data.name;
    var temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
    var description = data.weather[0].description;

    var cityElement = document.createElement("p");
    cityElement.innerHTML = `City: ${cityName}`;

    var temperatureElement = document.createElement("p");
    temperatureElement.innerHTML = `Temperature: ${temperature}°C`;

    var descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = `Description: ${description}`;

    weatherInfo.appendChild(cityElement);
    weatherInfo.appendChild(temperatureElement);
    weatherInfo.appendChild(descriptionElement);
}