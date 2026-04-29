const divCaja = document.getElementById("caja");
const btnColor = document.getElementById("btnCambiarColor");

btnColor.addEventListener("click",function(){
    divCaja.style.color = "white";
    divCaja.style.background = "blue";
})