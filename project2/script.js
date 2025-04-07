document.getElementById('weatherForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const city = document.getElementById('cityInput').value.trim();
  if (city !== '') {
    await getWeather(city);
  }
});

// getting dailyimg for pg

getNasaImage();
async function getNasaImage() {
  try {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    const data = await res.json();

    const section = document.getElementById('nasa-section');
    while (section.firstChild) section.removeChild(section.firstChild);

    const card = makeNasaCard(data);
    section.appendChild(card);
  } catch (err) {
    console.log('NASA API error:', err);
  }
}


// v gets the weather depending on city
async function getWeather(city) {
  try {
    const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geo.json();
    const loc = geoData.results[0];

    const lat = loc.latitude;
    const lon = loc.longitude;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph`;

    const res = await fetch(url);
    const data = await res.json();
    const weather = data.current_weather;

    const section = document.getElementById('weather-section');
    while (section.firstChild) section.removeChild(section.firstChild);

    const card = makeWeatherCard(city, weather);
    section.appendChild(card);
  } catch (err) {
    console.log('Weather API error:', err);
  }
}

function makeNasaCard(data) {
  const card = document.createElement('div');
  card.className = 'text-center';

  const img = document.createElement('img');
  img.src = data.url;
  img.alt = data.title;
  img.className = 'img-fluid mb-3';

  const title = document.createElement('h5');
  title.textContent = data.title;

  const desc = document.createElement('p');
  desc.textContent = data.explanation;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);

  return card;
}

function makeWeatherCard(city, weather) {
  const card = document.createElement('div');
  card.className = 'text-center';

  const cityName = document.createElement('h5');
  cityName.textContent = 'Weather in ' + city;

  const temp = document.createElement('p');
  temp.textContent = 'Temperature: ' + weather.temperature + '°F';

  const wind = document.createElement('p');
  wind.textContent = 'Wind Speed: ' + weather.windspeed + ' mph';

  const code = document.createElement('p');
  code.textContent = 'Weather Code: ' + weather.weathercode;

  card.appendChild(cityName);
  card.appendChild(temp);
  card.appendChild(wind);
  card.appendChild(code);

  return card;
}
