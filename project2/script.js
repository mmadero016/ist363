document.getElementById('auroraForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const city = document.getElementById('cityInput').value.trim();
  if (city !== '') {
    await getAuroraForecast(city);
  }
});

// nasa pic of day below
getNasaImage();

async function getNasaImage() {
  try {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=nOpIMvzL0zRCAOZTdgV9gaX5c4SYs8gAZ7yTb7Kc');
    const data = await res.json();

    const section = document.getElementById('nasa-section');
    while (section.firstChild) section.removeChild(section.firstChild);

    const card = makeNasaCard(data);
    section.appendChild(card);
  } catch (err) {
    console.log('NASA API error:', err);
  }
}

// Aurora forecast logic
async function getAuroraForecast(city) {
  try {
    const geoRes = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + city);
    const geoData = await geoRes.json();
    const location = geoData.results[0];
    const lat = location.latitude;

    const kpIndex = await getSimulatedKp();
    const visibleLat = getAuroraVisibilityLat(kpIndex);

    const section = document.getElementById('weather-section');
    while (section.firstChild) section.removeChild(section.firstChild);

    const result = document.createElement('div');
    result.className = 'card p-3 text-center';

    const message = document.createElement('h5');
    message.textContent = 'Your Latitude: ' + lat.toFixed(2) + '°';

    const kpInfo = document.createElement('p');
    kpInfo.textContent = 'Current Kp Index: ' + kpIndex;

    const visibility = document.createElement('p');
    if (lat >= visibleLat) {
      visibility.textContent = '✅ Aurora visibility is possible tonight!';
    } else {
      visibility.textContent = '❌ Aurora unlikely at your location :(';
    }

    result.appendChild(message);
    result.appendChild(kpInfo);
    result.appendChild(visibility);
    section.appendChild(result);
  } catch (err) {
    console.log('Aurora forecast error:', err);
  }
}

function getSimulatedKp() {
  const kp = Math.floor(Math.random() * 5) + 5;
  return Promise.resolve(kp);
}

// minimum latitude for aurora visibility
function getAuroraVisibilityLat(kp) {
  const map = {
    5: 66,
    6: 62,
    7: 58,
    8: 53,
    9: 48
  };
  return map[kp] || 66;
}

// video potential
function makeNasaCard(data) {
  const card = document.createElement('div');
  card.className = 'text-center';

  if (data.media_type === 'image') {
    const img = document.createElement('img');
    img.src = data.url;
    img.alt = data.title;
    img.className = 'img-fluid mb-3';
    card.appendChild(img);
  } else if (data.media_type === 'video') {
    const link = document.createElement('a');
    link.href = data.url;
    link.target = '_blank';
    link.textContent = 'Click here to watch today’s NASA video';
    card.appendChild(link);
  }

  const title = document.createElement('h5');
  title.textContent = data.title;

  const desc = document.createElement('p');
  desc.textContent = data.explanation;

  card.appendChild(title);
  card.appendChild(desc);

  return card;
}