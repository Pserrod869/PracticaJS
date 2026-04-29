// Función para alternar la clase
function myFunction() {
  const caja = document.getElementById("caja");
  caja.classList.toggle("resaltado");
}

// Seleccionamos el botón y le asignamos el evento
const boton = document.getElementById("btn-toggle");
boton.addEventListener("click", myFunction);