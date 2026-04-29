const price = document.getElementById("precio");
const discount = document.getElementById("descuento");
const btn = document.getElementById("btnCalcular");
const spanResultado = document.getElementById("resultado");

btn.addEventListener('click', function(){

    const precioOriginal = parseInt(price.value);
    const porcentajeDescuento = parseInt(discount.value);

    const precioFinal = precioOriginal - (precioOriginal * porcentajeDescuento / 100);
    let mensaje = "El precio final con el descuento del producto es de: " + precioFinal + "euros";

    spanResultado.textContent = mensaje;
});