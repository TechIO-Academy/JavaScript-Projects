import requests;

response = requests.get('https://www.themealdb.com/api/json/v1/1/searfch.php?s=chicken');

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Error:', response.status_code)