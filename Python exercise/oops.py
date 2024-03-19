import requests

class WeatherFetcher:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'http://api.openweathermap.org/data/2.5/weather'

    def fetch_weather(self, city):
        url = f"{self.base_url}?q={city}&appid={self.api_key}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch weather data for {city}. Status code: {response.status_code}")
            return None

# Example usage
if __name__ == "__main__":
    # API key for OpenWeatherMap
    api_key = 'YOUR_API_KEY'

    # Create an instance of WeatherFetcher
    weather_fetcher = WeatherFetcher(api_key)

    # Fetch weather data for a specific city
    city = 'London'
    weather_data = weather_fetcher.fetch_weather(city)

    # Display weather data
    if weather_data:
        temperature = weather_data['main']['temp']
        description = weather_data['weather'][0]['description']
        print(f"Current weather in {city}: Temperature: {temperature}°C, Description: {description}")
