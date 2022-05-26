const recorer = async() => {
    const datos = await fetch('https://fakestoreapi.com/products?sort=desc')
    const datos_definidos = await datos.json()

    let productos = []
     datos_definidos.forEach(element => {
         let producto
         `
         0
         `
        productos.push(producto)
         
     });
     document.getElementById("rw").innerHTML = productos.join('')


}
recorer()
