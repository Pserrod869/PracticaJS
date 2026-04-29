const carrusel=document.querySelectorAll(".imagenes img")
const boton=document.querySelectorAll(".buttons button")

let index=0;

function mostrarImagen(indice){
    for(let i=0; i<carrusel.length; i++){
        carrusel[i].style.display="none";
    }
    carrusel[indice].style.display="block";
}

for(let i=0; i<boton.length; i++){
    boton[i].addEventListener("click", function(){
        mostrarImagen(i);
    });
}

