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

async function fetchWeatherForecastData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=060ee3d08cb70813d76188d0043de3b7&units=metric`)
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

            document.getElementById("min-max-temp").innerHTML = `${data.main.temp_min}<sup style="font-size: 10px; position: relative; bottom: 7px;">o</sup>C/${data.main.temp_max}<sup style="font-size: 10px; position: relative; bottom: 7px;">o</sup>C`;

            document.getElementById("weather-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
        .catch((error) => {
            console.log(error);
        })

    fetchWeatherForecastData(cityName)
        .then((data) => {
            console.log(data);
            const parentDiv = document.getElementById("inner")


            // const newDiv = document.createElement("div")
            // let date = Date(data.list[0].dt)
            // // console.log(date);
            // const dateSlice = date.slice(4, 10)
            // // console.log(dateSlice);
            // let time = data.list[0].dt_txt
            // // console.log(time);
            // const timeSlice = time.slice(11, 13)
            // console.log(timeSlice);
            // newDiv.innerHTML = `<p>${dateSlice}</p><p>${timeSlice}</p><p>${data.list[0].main.temp}</p>`;
            // parentDiv.appendChild(newDiv)


            data.list.forEach((element) => {
                const newDiv = document.createElement("div")
                let date = Date(element.dt)
                // console.log(date);
                const dateSlice = date.slice(4, 10)
                // console.log(dateSlice);
                let time = element.dt_txt
                // console.log(time);
                const hour = Number(time.slice(11, 13));
               const hour_am_pm = hour >= 12 ? "PM" : "AM";
                // console.log(timeSlice);
                newDiv.innerHTML = `<p>${dateSlice}</p><p>${hour}${hour_am_pm}</p><p>${element.main.temp}</p>`;
                parentDiv.appendChild(newDiv)

            })

        })
        .catch((error) => {
            console.log(error);
        })

});

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}