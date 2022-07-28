import Producto from "./producto.js";
function guardar(){
    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta = document.getElementById("inp_precio").value
    let imagen = document.getElementById("inp_img").value
    let detalles = document.getElementById("inp_detalles").value
    let producto = new Producto(descripcion,precio_venta,imagen,detalles)
    producto.guardar_pasteles()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function ordenar(){
    let producto = new Producto
    producto.obtener_pasteles()
}
ordenar()

function eliminar(){
    let indice = localStorage.getItem("indice")
    let producto = new Producto
    producto.eliminar_pedido(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar(){
    let producto = new Producto()
    producto.actualizar_pasteles()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)
