// ===== CARRITO =====
let carrito = [];

// Abrir/cerrar panel
document
  .querySelector(".carrito-icon")
  .addEventListener("click", toggleCarrito);

function toggleCarrito() {
  const panel = document.getElementById("carrito-panel");
  panel.classList.toggle("abierto");
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
  const itemExistente = carrito.find((p) => p.id === producto.id);

  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
  carrito = carrito.filter((p) => p.id !== id);
  actualizarCarrito();
}

// Vaciar carrito
document.getElementById("btn-vaciar").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

// Renderizar carrito
function actualizarCarrito() {
  // Actualizar contador
  const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  document.querySelector(".carrito-count").textContent = totalItems;

  // Limpiar lista
  const lista = document.getElementById("carrito-items");
  lista.innerHTML = "";

  // Renderizar cada item
  carrito.forEach((item) => {
    const li = document.createElement("li");

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = `${item.nombre} x${item.cantidad}`;

    const precioSpan = document.createElement("span");
    precioSpan.textContent = (item.precio * item.cantidad).toLocaleString(
      "es-AR",
      { style: "currency", currency: "ARS" },
    );

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.textContent = "✕";
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(item.id));

    li.appendChild(nombreSpan);
    li.appendChild(precioSpan);
    li.appendChild(btnEliminar);

    lista.appendChild(li);
  });

  // Actualizar total
  const totalPrecio = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0,
  );
  document.getElementById("carrito-total").textContent =
    totalPrecio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
}
