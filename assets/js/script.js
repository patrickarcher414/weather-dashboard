var container = document.querySelector('#container')
var key = '3136490ddb596774fee3ee38098e9930'
var searchBtn = document.querySelector('#searchBtn')

// var cityData = locationData[0]
// var currentWeather = weatherData[0].current
// var fivedayForecast = weatherData[0].daily

// tomorrow's date
//fivedayForecast[0].dt

// // city name
// cityData.name

// // temp
// currentWeather.temp

// // feels like
// currentWeather.feels_like

// // wind
// currentWeather.wind_speed

// // humidity
// currentWeather.humidity

// // uv index
// currentWeather.uvi

function getLocationData(city) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&appid=" + key)
    .then(function(response) {
        return response.json()
    })
    .then(function(locationData) {
        console.log(locationData)
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
        console.log(weatherData)
        var currentDiv = document.createElement('div')
        var cityName = document.createElement('h2')

        container.innerText = weatherData.current.temp
    })
    .catch(function(err) {
        console.log(err)
    })
}

function handleSearch(ev) {
    ev.preventDefault();
    getLocationData('milwaukee');
    
}
searchBtn.addEventListener('click', handleSearch) 


