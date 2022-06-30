export default class Producto{
    constructor(d,pv,c){
        this.descripcion = d
        this.precio_venta = pv
        this.categoria = c
    }
    ///metodo
    guardar_producto(){
        let nuevo_producto = {
            descripcion:this.descripcion,
            precio_venta:this.precio_venta,
            categotia:this.categoria
        }

        if("productos" in localStorage){
            /*convertimos el JSON ontenido desde el storage en una expresion nativa de javascript*/
            let lista_productos = JSON.parse(localStorage.getItem("productos") )
            lista_productos.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista_productos) )
        }else{
            let lista_productos = []
            lista_productos.push(nuevo_producto)
    
            //guardar en el storage
            localStorage.setItem("productos",JSON.stringify(lista_productos) )

        }
    }
    obtener_productos(){
        
    }
}