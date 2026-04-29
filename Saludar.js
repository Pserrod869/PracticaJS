const name = document.getElementById("nombre");
const btnSaludar = document.getElementById("btn-saludar");
const result = document.getElementById("resultado");

btnSaludar.addEventListener('click', function(){
    const nombre = name.value;

    result.textContent = "Hola! " + nombre;
})