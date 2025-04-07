document.getElementById('auroraForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const city = document.getElementById('cityInput').value.trim();
  if (city !== '') {
    await getAuroraForecast(city);
  }
});

// NASA Astronomy Picture of the Day (no changes)
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

// New: Aurora forecast based on city
async function getAuroraForecast(city) {
  try {
    // Step 1: Get user's latitude
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();
    const location = geoData.results[0];
    const lat = location.latitude;

    // Step 2: Simulate current Kp index fetch
    const kpIndex = await getSimulatedKp(); // Returns 5–9 randomly (simulating real NOAA data)

    // Step 3: Compare lat vs kp threshold
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
      visibility.textContent = '❌ Aurora unlikely at your location.';
    }

    result.appendChild(message);
    result.appendChild(kpInfo);
    result.appendChild(visibility);
    section.appendChild(result);
  } catch (err) {
    console.log('Aurora forecast error:', err);
  }
}

// Simulate Kp index (normally you'd get this from a NOAA endpoint)
function getSimulatedKp() {
  const kp = Math.floor(Math.random() * 5) + 5; // Random between 5–9
  return Promise.resolve(kp);
}

// Convert Kp index to latitude cutoff for aurora visibility
function getAuroraVisibilityLat(kp) {
  // Example mapping based on NOAA Kp visibility maps
  const map = {
    5: 66,
    6: 62,
    7: 58,
    8: 53,
    9: 48
  };
  return map[kp] || 66;
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
