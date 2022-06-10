let consolas = ['Playstation','Xbox','Nintendo game cube','Sega DreamCast','Game Boy Advanced']
//eliminar elementos 
const indice = consolas.indexOf("Nintendo game cube")
consolas.splice(indice,2)
//agregar al final 
consolas.push('Nintendo 64')
//agregar al inicio
consolas.unshift('Nintendo Wii')
//función flecha
console.log(consolas)
const mostrar = () => {
    const longitud = consolas.length;
    const ultimo_elemento = consolas[longitud-1]
    const Xbox = consolas.indexOf("Xbox")
    document.getElementById("p").textContent = 'La longitud es : '+longitud+ ' El último elemento es: '+ultimo_elemento+' Xbox esta en la posicion: '+Xbox
}
document.getElementById("btn").addEventListener("click",mostrar)
//crear tabla
function crear_tabla(){
    let filas= []
    consolas.forEach((element,indice) => {
        let fila  =`
        <tr>
            <td>${indice+1}</td>
            <td>${element}</td>
        </tr>
        `
        filas.push(fila)
    });
    document.getElementById("tbd").innerHTML = filas.join('')
}
crear_tabla()




