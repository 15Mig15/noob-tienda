let carrito = [];
document
  .querySelector(".carrito-icon")
  .addEventListener("click", toggleCarrito);

function toggleCarrito() {
  const panel = document.getElementById("carrito-panel");
  panel.classList.toggle("abierto");
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  const itemExistente = carrito.find((p) => p.id === id);

  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter((p) => p.id !== id);
  actualizarCarrito();
}

function actualizarCarrito() {
  // Actualizar contador
  const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  document.querySelector(".carrito-count").textContent = total;

  // Renderizar items del panel
  const lista = document.getElementById("carrito-items");
  lista.innerHTML = "";

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.nombre} x${item.cantidad}</span>
      <span>${(item.precio * item.cantidad).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
      <button class="btn-eliminar" data-id="${item.id}">✕</button>
    `;
    lista.appendChild(li);
  });

  // Actualizar total
  const totalPrecio = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0,
  );
  document.getElementById("carrito-total").textContent =
    totalPrecio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  // Eventos de eliminar
  document.querySelectorAll(".btn-eliminar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      eliminarDelCarrito(Number(e.target.dataset.id));
    });
  });
}

document.getElementById("btn-vaciar").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});
