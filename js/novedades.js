// ===== API RAWG - NOVEDADES =====
const API_KEY = "4354739909ce41ff8fb8488a952366d2";
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=3`;

async function cargarNovedades() {
  const container = document.getElementById("novedades-container");

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    data.results.forEach((juego) => {
      const card = document.createElement("div");
      card.classList.add("novedad-card");

      const img = document.createElement("img");
      img.src = juego.background_image;
      img.alt = juego.name;

      const info = document.createElement("div");
      info.classList.add("novedad-info");

      const nombre = document.createElement("h3");
      nombre.textContent = juego.name;

      const rating = document.createElement("p");
      rating.classList.add("novedad-rating");
      rating.textContent = `⭐ ${juego.rating} / 5`;

      const fecha = document.createElement("p");
      fecha.classList.add("novedad-fecha");
      fecha.textContent = `🗓 ${juego.released}`;

      info.appendChild(nombre);
      info.appendChild(rating);
      info.appendChild(fecha);

      card.appendChild(img);
      card.appendChild(info);

      container.appendChild(card);
    });
  } catch (error) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Error al cargar las novedades.";
    container.appendChild(mensaje);
    console.error(error);
  }
}

cargarNovedades();
