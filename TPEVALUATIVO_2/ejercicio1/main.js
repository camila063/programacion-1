const ver_casas = async () => { 
    const casas = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const lista = await casas.json()
    let filas = []
    lista.forEach((element,indece) => {
        let fila = 
        `<tr>
            <td>${indece+1}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.compra}</td>
            <td>${element.casa.venta}</td>
        </tr>`
        filas.push(fila)
    });    document.getElementById("tbl_body").innerHTML = filas.join('')
   
}
ver_casas()
