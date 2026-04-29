// ==========================================
// SELECCIÓN DE ELEMENTOS PRINCIPALES
// ==========================================
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

// ==========================================
// FUNCIÓN: AGREGAR TAREA (Evento principal)
// ==========================================
btnAgregar.addEventListener("click", function() {
    
    // Si el cajón de texto está vacío, no hacemos nada (salimos de la función)
    if (inputTarea.value === "") {
        return; 
    }

    // --- CONCEPTO 1: createElement ---
    // Creamos los elementos que formarán nuestra nueva fila
    const itemLista = document.createElement("li");
    const textoSpan = document.createElement("span");
    const btnCompletar = document.createElement("button");
    const btnEliminar = document.createElement("button");

    // Les damos su contenido
    textoSpan.textContent = inputTarea.value; 
    btnCompletar.textContent = "✔ Completada";
    btnEliminar.textContent = "🗑 Eliminar";

    // --- CONCEPTO 2: Eventos (Propios de cada tarea) ---
    
    // Función: Marcar como completada
    btnCompletar.addEventListener("click", function() {
        // --- CONCEPTO 3: Manipulación de clases ---
        // toggle: si tiene la clase "tachado" se la quita, si no la tiene se la pone
        textoSpan.classList.toggle("tachado"); 
    });

    // Función: Eliminar tarea
    btnEliminar.addEventListener("click", function() {
        // Borramos el <li> entero
        itemLista.remove(); 
    });

    // --- ENSAMBLAJE ---
    // Metemos el texto y los dos botoncitos dentro del <li>
    itemLista.appendChild(textoSpan);
    itemLista.appendChild(btnCompletar);
    itemLista.appendChild(btnEliminar);

    // Metemos el <li> terminado en nuestra lista <ul> del HTML
    lista.appendChild(itemLista);

    // Vaciamos el cajón de texto para escribir la siguiente
    inputTarea.value = "";
});