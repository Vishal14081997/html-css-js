async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=060ee3d08cb70813d76188d0043de3b7&units=metric`)
        const data = await response.json()
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("search-button").addEventListener("click", function () {
    let cityName = document.getElementById("input").value;
    //    console.log(cityName);
    let weatherData = fetchWeatherData(cityName)
    //    console.log(weatherData);
    weatherData
        .then((data) => {
            console.log(data);
            document.getElementById("city-name").innerText = data.name;

            document.getElementById("current-temp").innerHTML = `${data.main.temp}<sup style="font-size: 50px; position: relative; bottom: 15px;">o</sup>C`;

            document.getElementById("min-max-temp").innerHTML = `${data.main.temp_max}<sup style="font-size: 10px; position: relative; bottom: 7px;">o</sup>C/${data.main.temp_max}<sup style="font-size: 10px; position: relative; bottom: 7px;">o</sup>C`;
        })
        .catch((error) => {
            console.log(error);
        })

});

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}