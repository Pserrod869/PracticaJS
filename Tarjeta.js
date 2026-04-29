// ==========================================
// ACCEDIENDO A ELEMENTOS (getElementById)
// ==========================================
const inputNumero = document.getElementById('inputNumero');
const btnValidar = document.getElementById('btnValidar');
const mensaje = document.getElementById('mensaje');
const contadorFallos = document.getElementById('contadorFallos');
const ventanaModal = document.getElementById('ventanaModal');
const textoIntentosModal = document.getElementById('textoIntentosModal');
const btnCerrar = document.getElementById('btnCerrar');

// ==========================================
// LÓGICA INICIAL DEL JUEGO
// ==========================================
let numeroAdivinar = Math.floor(Math.random() * 11); // Genera número del 0 al 10
let fallos = 0;

// ==========================================
// EVENTOS (onclick) Y MODIFICACIÓN (textContent, style)
// ==========================================

// Evento al pulsar el botón "Validar"
btnValidar.onclick = function() {
    let numeroIngresado = parseInt(inputNumero.value);

    // Comprobamos si ha acertado
    if (numeroIngresado === numeroAdivinar) {
        // Modificamos el texto del modal usando textContent
        textoIntentosModal.textContent = "Cantidad de intentos: " + fallos;
        
        // Mostramos el modal modificando su estilo (style)
        ventanaModal.style.display = "block";
    } 
    // Si falla
    else {
        fallos++;
        // Actualizamos el contador en pantalla
        contadorFallos.textContent = fallos;

        // Damos la pista
        if (numeroIngresado > numeroAdivinar) {
            mensaje.textContent = "El número es menor al ingresado";
        } else {
            mensaje.textContent = "El número es mayor al ingresado";
        }
    }
};

// Evento al pulsar el botón "Cerrar" de la ventana modal
btnCerrar.onclick = function() {
    // 1. Ocultamos la ventana modal (style)
    ventanaModal.style.display = "none";

    // 2. Reiniciamos la lógica
    numeroAdivinar = Math.floor(Math.random() * 11);
    fallos = 0;

    // 3. Restauramos los textos de la pantalla inicial (textContent)
    contadorFallos.textContent = "0";
    mensaje.textContent = "El juego ha comenzado";
    inputNumero.value = ""; // Vaciamos el input
};