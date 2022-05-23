const precioTicket= 200;
function resumir(){
    var cantidad = document.getElementById('InputCantidad').value;
    var descuento = document.getElementById('InputCategoria').value;
    var precioPagar = cantidad *(precioTicket -((precioTicket * descuento) / 100));
    document.getElementById('CompraTotal').value="Total a pagar: $" + precioPagar;
    console.log(CompraTotal);
}
 function cantidadIncorrecta(){
     if(cantidad<0){mostrarMensaje('Cantidad incorrecta')}
 }