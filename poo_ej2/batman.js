export default class Batman{ 
    constructor (){
    }
    async consumir_api(){
        const recorrido = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const recorrer_peliculas = await recorrido.json() 
        let filas = []
        for (const Element of recorrer_peliculas.Search) {
            let fila = `
            <div class="card" style="width: 18rem;">
             <img src="${Element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${Element.Title}</h5>
                <p class="card-text">Año de lanzamiento: ${Element.Year}</p>
             </div>
            </div>
            `
            filas.push(fila)
        }
        document.getElementById("rw").innerHTML = filas.join('')
    }
}
