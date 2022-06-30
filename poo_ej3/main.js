import Producto from "./producto.js";
function guardar(){
    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta = document.getElementById("inp_precio").value
    let categoria = document.getElementById("slt_cat").value
    let producto = new Producto(descripcion,precio_venta,categoria)

    //invocamos al metodo guardar_producto()
    //perteneciente a la clase Producto
    producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)
function listar(){
    let producto = new Producto
    producto.obtener_productos()
}
listar()