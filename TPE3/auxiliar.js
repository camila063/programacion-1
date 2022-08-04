function almacenar_indice(index){
    localStorage.setItem("indice",index)
}
function editar(index){
    let lista_pasteles = JSON.parse (localStorage.getItem("productos"))
    document.getElementById("inp_descripcion").value = lista_pasteles[index].descripcion
    document.getElementById("inp_precio").value = lista_pasteles[index].precio_venta
    document.getElementById("inp_img").value = lista_pasteles[index].imagen
    document.getElementById("inp_detalles").value = lista_pasteles[index].detalles
    localStorage.setItem("indice",index)
    
    document.getElementById("btn_guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"

}
function agregar_pedido(des,pv){
    let nuevo_pedido = {
        descripcion:des,
        cantidad:1,
        precio:pv
    }

    if("pedidos" in localStorage){
        let lista = JSON.parse(localStorage.getItem("pedidos"))
        lista.push(nuevo_pedido)
        localStorage.setItem("pedidos",JSON.stringify(lista))
    }else{
        let lista = [] 
        lista.push(nuevo_pedido)
        localStorage.setItem("pedidos",JSON.stringify(lista))
    }

    cargar_pedido()

}

function cargar_pedido(){
    let lista_tortita = JSON.parse(localStorage.getItem("pedidos"))
    let filas = []
    
    lista_tortita.forEach((element,index) => {
        let fila = `
            <tr class="table-light">
                <td>${element.descripcion}</td>
                <td>
                    <p id="cantidad_${index}">${element.cantidad}</p>
                    <button class="btn btn-light btn-sm"><i class="fa fa-plus-square-o"></i></button>
                    <button class="btn btn-light btn-sm"><i class="fa fa-minus-square-o"></i></button>
                </td>
                <td>\$${element.precio}</td>
            </tr>

        `
        filas.push(fila)
    });
    document.getElementById("tbody").innerHTML = filas.join('')
}
cargar_pedido()

