document.getElementById('search-btn').addEventListener('click', searchCity)

function showLoadingIndicator () {
  document.getElementById('loading-indicator').style.display = 'block'
}

function hideLoadingIndicator () {
  document.getElementById('loading-indicator').style.display = 'none'
}

function fetchWeatherData (city) {
  showLoadingIndicator()
  const apiKey = '5c3a15a30a363e634cb2a255678865a4'
  city = city || 'New York'

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      updateWeatherDisplay(data)
      hideLoadingIndicator()
    })
    .catch(error => {
      console.log(error)
      hideLoadingIndicator()
      alert('Failed to fetch weather data')
    })
}

function updateWeatherDisplay (data) {
  const temperatureCelsius = data.main.temp
  document.getElementById(
    'location'
  ).textContent = `Location: ${data.name}, ${data.sys.country}`
  document.getElementById(
    'temperature'
  ).textContent = `Temperature: ${temperatureCelsius}°C`
  document.getElementById(
    'humidity'
  ).textContent = `Humidity: ${data.main.humidity}%`
  document.getElementById(
    'wind'
  ).textContent = `Wind Speed: ${data.wind.speed} m/s`
  document.getElementById(
    'weather-icon'
  ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}

function fetchCurrentLocationWeather () {
  showLoadingIndicator()
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const apiKey = '5c3a15a30a363e634cb2a255678865a4'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            updateWeatherDisplay(data)
            hideLoadingIndicator()
          })
          .catch(error => {
            console.log(error)
            hideLoadingIndicator()
            alert('Failed to fetch weather data')
          })
      },
      () => {
        alert('Geolocation permission denied.')
      }
    )
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

function searchCity () {
  const cityInput = document.getElementById('city-input').value
  fetchWeatherData(cityInput)
}

// Correct way to handle multiple load events
window.addEventListener('load', () => {
  fetchCurrentLocationWeather() // This will attempt to fetch weather for the current location on page load.
})
