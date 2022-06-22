let criptos = ["Bitcoin", "Ethereum", "Tether", "BNB" , "Cardano" , "Dai" , "Helium", "Shiba Inu" , "Tron" , "Cronos", "Solana"]
criptos.unshift("Stellar")
const indice = criptos.indexOf("Shiba Inu")
criptos.splice(indice,2)
criptos.push("Gate")
criptos.forEach((element,index) => {
    console.log(index+ ':'+element)
});
function mostrar(){
    const longitud = criptos.length;
    const ultimo_elemento = criptos[longitud-1]
    const indice = criptos.indexOf("Helium")
    
    let criptomonedas = `
    Longitud del arreglo es de: ${longitud}
    <br>
    Ultimo elemento es: ${ultimo_elemento}
    <br>
    La criptomoneda Helium se encuentra en la posicion: ${indice}
    `
    document.getElementById("p").innerHTML = criptomonedas
}

const recorrer_lista = () => {
    let filas = []
    criptos.forEach((element) => {
        let fila = `<li class="list-group-item">${element}</li>`
        filas.push(fila)
    });
    document.getElementById("lst").innerHTML = filas.join('')
}
const boton = document.getElementById("btn").addEventListener("click",recorrer_lista)