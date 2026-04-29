// 1. Acceder a los elementos (usando getElementById)
const inputData = document.getElementById("data");
const btnValidate = document.getElementById("validate");
const warningText = document.getElementById("warning");
const ptsLabel = document.getElementById("pts-label");
const modal = document.getElementById("modal");
const ptsModal = document.getElementById("pts");
const btnClose = document.getElementById("btn-close");

// Lógica básica del juego (Core JavaScript)
let numeroSecreto = Math.floor(Math.random() * 11);
let fallos = 0;

// 2. Evento para el botón de Validar (usando addEventListener)
btnValidate.addEventListener("click", function() {
    let numeroIngresado = parseInt(inputData.value);

    // Comprobar si acierta
    if (numeroIngresado === numeroSecreto) {
        // Mostrar ventana (usando style)
        modal.style.display = "block";
        // Actualizar texto de la ventana modal (usando textContent)
        ptsModal.textContent = "Cantidad de intentos: " + fallos;
    } 
    // Comprobar si falla
    else {
        fallos++;
        // Modificar textos (usando textContent)
        ptsLabel.textContent = fallos;

        if (numeroIngresado > numeroSecreto) {
            warningText.textContent = "El número es menor al ingresado";
        } else {
            warningText.textContent = "El número es mayor al ingresado";
        }
    }
});

// 3. Evento para el botón de Cerrar la ventana (usando addEventListener)
btnClose.addEventListener("click", function(event) {
    // Al ser una etiqueta <a>, evitamos que nos lleve a 'index.html'
    event.preventDefault();

    // Ocultar ventana (usando style)
    modal.style.display = "none";

    // Reiniciar los valores del juego
    numeroSecreto = Math.floor(Math.random() * 11);
    fallos = 0;

    // Restaurar los textos e input al estado inicial (usando textContent)
    ptsLabel.textContent = "0";
    warningText.textContent = "El juego ha comenzado";
    inputData.value = "";
});

