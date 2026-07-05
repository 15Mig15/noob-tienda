const container = document.querySelector(".cards-container");

productos.forEach((producto) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <div class="card-info">
      <span class="card-categoria">${producto.categoria}</span>
      <h3>${producto.nombre}</h3>
      <p class="card-precio">${producto.precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
      <button class="card-btn" data-id="${producto.id}">Agregar al carrito</button>
    </div>
  `;

  card.querySelector(".card-btn").addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });

  container.appendChild(card);
});
