// home.js - Logic specific to chamber home page


// --- WEATHER ---
const weatherSection = document.getElementById('weather');
const tempSpan = document.getElementById('temp');
const descSpan = document.getElementById('description');
const iconImg = document.getElementById('weather-icon');
const forecastDiv = document.getElementById('forecast');

const apiKey = '7daaca17f73b8537056bf2d813d49c18'; // <-- Replace with your OpenWeatherMap API key
const lat = -0.1807; // Quito latitude
const lon = -78.4678; // Quito longitude

async function fetchWeather() {
  if (!apiKey) {
    console.warn('Add your OpenWeatherMap API key in home.js to enable weather functionality.');
    return;
  }

  try {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentURL),
      fetch(forecastURL)
    ]);

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    // Current
    const temp = Math.round(currentData.main.temp); // already °C
    const description = currentData.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`;
    tempSpan.textContent = temp;
    descSpan.textContent = description;
    iconImg.src = icon;
    iconImg.alt = description;

    // 3-day forecast (filter 12:00:00)
    const days = {};
    forecastData.list.forEach(item => {
      if (item.dt_txt.includes('12:00:00')) {
        const date = new Date(item.dt * 1000);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
        days[weekday] = Math.round(item.main.temp);
      }
    });

    forecastDiv.innerHTML = Object.entries(days).slice(0, 3).map(([day, t]) => `
      <div class="day"><span>${day}</span><span>${t}°C</span></div>
    `).join('');

  } catch (err) {
    console.error('Weather fetch error', err);
  }
}

// --- SPOTLIGHTS ---
const spotlightsContainer = document.getElementById('spotlights-container');
async function loadSpotlights() {
  try {
    const res = await fetch('data/members.json');
    const members = await res.json();
    const eligible = members.filter(m => m.membershipLevel >= 2); // silver or gold

    // shuffle
    for (let i = eligible.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [eligible[i], eligible[j]] = [eligible[j], eligible[i]];
    }

    const pick = eligible.slice(0, 3);
    spotlightsContainer.innerHTML = pick.map(member => `
      <div class="spotlight-card level-${member.membershipLevel}">
        <img src="${member.image}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      </div>
    `).join('');
  } catch (e) {
    console.error('Spotlights error', e);
  }
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  console.log("CCC")
  fetchWeather();
  loadSpotlights();
});
