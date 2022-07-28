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
