export default class Producto{
    constructor(d,pv,c){
        this.descripcion = d
        this.precio_venta = pv
        this.categoria = c
    }
    //metodo 
    guardar_producto(){
        let nuevo_producto = {
            descripcion:this.descripcion,
            precio_venta:this.precio_venta,
            categoria:this.categoria
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
        /*invocamos el metodo obtener_productos()para
            lograr reconstruir la tabla, y asi reflejar los datos actualizados que provienen 
            del localStorage.especificamente del item "productos"
         */
        this.obtener_productos()
    }
    obtener_productos(){
        /*recolectamos todos los productos aloajdos en el item que estn notacion json, debemos convertirlo en una expresion nativa de javascript
            es decir, hacemos un JSON.parse
        */
        let lista_productos = JSON.parse(localStorage.getItem("productos"))

        let filas = []
        lista_productos.forEach( (element,index) => {
            let fila = ` 
            <tr>
                <td>${index+1}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio_venta}</td>
                <td>${element.categoria}</td>
                <td>
                    <button class="btn btn-danger btm-sm">
                    <i class="fa fa-trash"> </i>
                    </button>
                </td>
            </tr>  
            `
            filas.push(fila)
            
        });
        document.getElementById("tbody").innerHTML = filas.join('')

    }
}