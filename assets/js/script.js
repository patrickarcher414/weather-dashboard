
var lat, lon 
const key = '3136490ddb596774fee3ee38098e9930'
var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
var geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`
var city = 'milwaukee'

// get city lat and lon with geocoding API
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var lat = data[0].lat
        var lon = data[0].lon
        console.log(lat)
        console.log(lon)
    })
    .catch(function(err) {
        console.log(err)
    })


// get weather data for lat and lon returned from geocoding fetch
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        
    })
    .catch(function(err) {
        console.log(err)
    })