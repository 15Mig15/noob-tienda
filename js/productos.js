// ===== FETCH JSON + RENDERIZADO =====
async function cargarProductos() {
  try {
    const response = await fetch("data/juegos.json");
    const productos = await response.json();

    const container = document.querySelector(".cards-container");

    productos.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;

      const cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");

      const categoria = document.createElement("span");
      categoria.classList.add("card-categoria");
      categoria.textContent = producto.categoria;

      const nombre = document.createElement("h3");
      nombre.textContent = producto.nombre;

      const precio = document.createElement("p");
      precio.classList.add("card-precio");
      precio.textContent = producto.precio.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
      });

      const boton = document.createElement("button");
      boton.classList.add("card-btn");
      boton.textContent = "Agregar al carrito";
      boton.addEventListener("click", () => agregarAlCarrito(producto));

      cardInfo.appendChild(categoria);
      cardInfo.appendChild(nombre);
      cardInfo.appendChild(precio);
      cardInfo.appendChild(boton);

      card.appendChild(img);
      card.appendChild(cardInfo);

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

cargarProductos();
