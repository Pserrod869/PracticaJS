// 1. Buscamos en el documento HTML el elemento que tiene el id "mensaje"
// y lo guardamos en una variable constante llamada 'msj'.
const msj = document.getElementById("mensaje");

// 2. Buscamos en el HTML el elemento que tiene el id "toggle" (que suele ser un botón)
// y lo guardamos en la variable 'btnToggle'.
const btnToggle = document.getElementById("toggle");

// 3. Le "escuchamos" los clics al botón. 
// addEventListener hace que el botón espere a que ocurra el evento "click".
// Cuando alguien hace clic, se ejecuta la función que está justo después.
btnToggle.addEventListener("click", function(){
    
    // 4. Comprobamos el estado actual del mensaje.
    // Si el estilo de visualización (display) del mensaje es "none" (es decir, está oculto)...
    if (msj.style.display === "none"){
        
        // ...entonces lo cambiamos a "block" para que sea visible en la pantalla.
        msj.style.display = "block";
        
    } else {
        // 5. Si NO es "none" (es decir, el mensaje ya está visible)...
        // ...entonces lo cambiamos a "none" para volver a ocultarlo.
        msj.style.display = "none";
    }
});
