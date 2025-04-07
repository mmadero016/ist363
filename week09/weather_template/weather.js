const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=temperature_2m,precipitation,cloud_cover&temperature_unit=fahrenheit";

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {

        const data = JSON.parse(request.responseText);

        const temperature = data.current.temperature_2m;
        const precipitation = data.current.precipitation;
        const cloudCover = data.current.cloud_cover;

        const cloudEmoji = cloudCover > 50 ? '☁️' : '☀️';

        document.querySelector('.weather .col-md-6').innerHTML = `
            Precipitation: ${precipitation}"<br>
            Temperature: ${temperature}°F
        `;
        document.querySelector('.weather .emoj').textContent = cloudEmoji;

    } else if (request.readyState === 4) {
        console.error('Could not get data!');
    }
});

request.open('GET', endpoint);
request.send();
