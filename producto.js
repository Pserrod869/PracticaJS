// 1. Obtener los elementos del DOM. Estos comandos SÍ están en tu hoja.
const inputPrecio = document.getElementById('precio');
const inputDescuento = document.getElementById('descuento');
const btnCalcular = document.getElementById('btnCalcular');
const spanResultado = document.getElementById('resultado');

// 2. Añadir el escuchador de eventos. El comando es addEventListener, que está (con un typo: "addEventListner") en tu hoja.
btnCalcular.addEventListener('click', function() {
    
    // --- PARTE NO INCLUIDA EN LA HOJA DE TRUCOS ---
    // Falta el comando '.value' para leer lo que escribe el usuario.
    // También usamos parseFloat() para convertir el texto a números.
    const precioOriginal = parseFloat(inputPrecio.value);
    const porcentajeDescuento = parseFloat(inputDescuento.value);
    // ----------------------------------------------

    // Estas operaciones matemáticas y de cadenas son estándar de JavaScript 
    // y no se listan en una hoja del DOM. Son estándar para cualquier código.
    const precioFinal = precioOriginal - (precioOriginal * porcentajeDescuento / 100);
    let mensaje = "El precio final del producto después de aplicar un descuento del " + porcentajeDescuento + "% es: " + precioFinal + " euros.";

    // 3. Mostrar el resultado. Este comando (textContent) SÍ está en tu hoja.
    spanResultado.textContent = resultadoTexto;
});