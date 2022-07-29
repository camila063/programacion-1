export default class Producto{
    constructor(des,pv,img,det){
        this.descripcion = des
        this.precio_venta = pv
        this.imagen = img
        this.detalles = det
    }
    guardar_pasteles(){
        let nuevo_producto = {
            descripcion:this.descripcion,
            precio_venta:this.precio_venta,
            imagen:this.imagen,
            detalles:this.detalles

        }

        if("productos" in localStorage){
            let lista_pasteles = JSON.parse(localStorage.getItem("productos") )
            lista_pasteles.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista_pasteles) )
        }else{
            let lista_pasteles = []
            lista_pasteles.push(nuevo_producto)
    
            localStorage.setItem("productos",JSON.stringify(lista_pasteles) )

        }
        this.obtener_pasteles()
        this.vaciar_formulario()

    }
    obtener_pasteles(){
            let lista_pasteles = JSON.parse(localStorage.getItem("productos"))
    
            let filas = []
            lista_pasteles.forEach( (element,index) => {

                let fila = ` 
                <tr>
                    <td>${index+1}</td>
                    <td>${element.descripcion}</td>
                    <td><img src="${element.imagen}" alt="${element.descripcion}" width="60" height="60"></td>
                    <td>${element.detalles}</td>
                    <td>${element.precio_venta}</td>
                    <td>
                        <button onclick="almacenar_indice(${index})"class="btn btn-danger btm-sm" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <i class="fa fa-trash"> </i>
                        </button>
                        <button onclick="editar(${index})" class="btn btn-primary btn-sm">
                        <i class="fa fa-edit"> </i>
                        </button>
                    </td>
                </tr>  
                `
                filas.push(fila)
                
            });
            document.getElementById("tbody").innerHTML = filas.join('')
    
    }
    eliminar_pedido(indice){
            let lista_pasteles = JSON.parse (localStorage.getItem("productos"))
            lista_pasteles.splice(indice,1)
            localStorage.setItem("productos", JSON.stringify(lista_pasteles))
            this.obtener_pasteles()
    }
    actualizar_pasteles(){
            let indice = localStorage.getItem("indice")
    
            let listado_pasteles = JSON.parse(localStorage.getItem("productos"))
            listado_pasteles[indice].descripcion = document.getElementById("inp_descripcion").value
            listado_pasteles[indice].precio_venta = document.getElementById("inp_precio").value
            listado_pasteles[indice].imagen = document.getElementById("inp_img").value
            listado_pasteles[indice].detalles = document.getElementById("inp_detalles").value
    
            localStorage.setItem("productos",JSON.stringify(listado_pasteles))
    
            this.obtener_pasteles()
    
            document.getElementById("btn_guardar").style.display = "block"
            document.getElementById("btn_actualizar").style.display = "none"
            this.vaciar_formulario()
    }
    vaciar_formulario(){
        document.getElementById("form_produc").reset()

    }

}

