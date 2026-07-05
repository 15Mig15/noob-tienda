const API_KEY = "4354739909ce41ff8fb8488a952366d2";
const URL = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=3`;

const novedadesContainer = document.getElementById("novedades-container");

async function fetchNovedades() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.results.forEach((juego) => {
      const card = document.createElement("div");
      card.classList.add("novedad-card");

      card.innerHTML = `
        <img src="${juego.background_image}" alt="${juego.name}">
        <div class="novedad-info">
          <h3>${juego.name}</h3>
          <p class="novedad-rating">⭐ ${juego.rating}</p>
          <p class="novedad-fecha">🗓 ${juego.released}</p>
        </div>
      `;

      novedadesContainer.appendChild(card);
    });
  } catch (error) {
    novedadesContainer.innerHTML = "<p>Error al cargar las novedades.</p>";
    console.error(error);
  }
}

fetchNovedades();
