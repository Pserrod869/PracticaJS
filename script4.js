const list = document.getElementById("lista");
const btnAgregar = document.getElementById("agregar");

btnAgregar.addEventListener("click", function(){
    const nuevaLista = document.createElement("li");

    nuevaLista.textContent = "Nueva lista";

    list.appendChild(nuevaLista);
})