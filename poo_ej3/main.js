import Producto from "./producto.js";
function guardar(){
    //le asignamos una variable para obtener el elemeto html
    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta = document.getElementById("inp_precio").value
    let categoria = document.getElementById("slt_cat").value
    //se crea una instancia y se guardan las variables que son ejecutadas en el constructor
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
function eliminar(){
    let indice = localStorage.getItem("indice")
    //creamos una instancia para para acceder a los  
    //metodos y atributos de la clase producto
    let producto = new Producto()
    producto.eliminar_producto(indice)
}
document.getElementById("btn-eliminar").addEventListener("click",eliminar)