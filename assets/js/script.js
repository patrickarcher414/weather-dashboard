
var cities = [];
var cityInput = document.querySelector('#citySearch')
var container = document.querySelector('#container')
var key = '3136490ddb596774fee3ee38098e9930'
var searchBtn = document.querySelector('#searchBtn')

// var currentWeather = weatherData[0].current
// var fivedayForecast = weatherData[0].daily

// tomorrow's date
//fivedayForecast[0].dt


function getLocationData(city) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&appid=" + key)
    .then(function(response) {
        return response.json()
    })
    .then(function(locationData) {
        getCurrentWeather(locationData[0].lat, locationData[0].lon)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function getCurrentWeather(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key)
    .then(function(response) {
        return response.json()
    })
    .then(function(weatherData) {
        
        var currentDiv = document.createElement('div')
        container.appendChild(currentDiv)

        var cityName = document.createElement('h2')
        currentDiv.appendChild(cityName)
        var city = localStorage.getItem("city")
        cityName.innerText = city

        var weatherList = document.createElement('ul')
        currentDiv.appendChild(weatherList)

        // create a list item with current temp
        var tempEl = document.createElement('li')
        tempEl.setAttribute('class', 'list-group list-group-flush')
        tempEl.innerText = "Temp: " + Math.floor(weatherData.current.temp) + "°F"
        weatherList.appendChild(tempEl)

        // repeat for wind
        var windEl = document.createElement('li')
        windEl.setAttribute('class', 'list-group list-group-flush')
        windEl.innerText = "Wind: " + Math.floor(weatherData.current.wind_speed) + " mph"
        weatherList.appendChild(windEl)

        // repeat for humidity
        var humEl = document.createElement('li')
        humEl.setAttribute('class', 'list-group list-group-flush')
        humEl.innerText = "Humidity: " + weatherData.current.humidity + "%"
        weatherList.appendChild(humEl)

        //repeat for uv index
        var uvEl = document.createElement('li')
        uvEl.setAttribute('class', 'list-group list-group-flush')
        uvEl.innerText = "UV Index: " + weatherData.current.uvi
        weatherList.appendChild(uvEl)

    })
    .catch(function(err) {
        console.log(err)
    })
}


function handleSearch(ev) {
    ev.preventDefault();
    container.innerHTML = ""
    var cityName = cityInput.value
    cities.push(cityName)
    localStorage.setItem("city", cities)
    console.log(cities)
    getLocationData(cityName);
    
}
searchBtn.addEventListener('click', handleSearch) 


