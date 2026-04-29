// 1. Acceder a los elementos (usando getElementById)
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputImagen = document.getElementById("imagen");
const contenedor = document.getElementById("contenedor");

// 2. Escuchar el evento submit del formulario
formulario.addEventListener("submit", function(event) {
    // Evitar que la página se recargue al enviar el formulario
    event.preventDefault();

    // Validar campos básicos
    if (inputNombre.value === "" || inputPrecio.value === "" || inputImagen.value === "") {
        return; // Salir si falta algo
    }

    // 3. Crear los elementos de la tarjeta (usando createElement)
    const tarjetaDiv = document.createElement("div");
    const imagen = document.createElement("img");
    const titulo = document.createElement("h3");
    const precioParrafo = document.createElement("p");
    const botonEliminar = document.createElement("button");

    // 4. Modificar atributos (usando setAttribute, como pide el PDF)
    tarjetaDiv.setAttribute("class", "tarjeta");
    imagen.setAttribute("src", inputImagen.value);
    botonEliminar.setAttribute("class", "eliminar");

    // 5. Modificar el texto (usando textContent)
    titulo.textContent = inputNombre.value;
    precioParrafo.textContent = inputPrecio.value + " €";
    botonEliminar.textContent = "Eliminar";

    // 6. Añadir evento al botón eliminar (usando removeChild)
    botonEliminar.addEventListener("click", function() {
        contenedor.removeChild(tarjetaDiv);
    });

    // 7. Construir la estructura de la tarjeta (usando appendChild)
    tarjetaDiv.appendChild(imagen);
    tarjetaDiv.appendChild(titulo);
    tarjetaDiv.appendChild(precioParrafo);
    tarjetaDiv.appendChild(botonEliminar);

    // 8. Añadir la tarjeta completa al contenedor
    contenedor.appendChild(tarjetaDiv);

    // Limpiar los inputs del formulario para la siguiente tarjeta
    inputNombre.value = "";
    inputPrecio.value = "";
    inputImagen.value = "";
});