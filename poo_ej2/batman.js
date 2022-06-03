export default class Batman{ 
    constructor (){
    }
    async consumir_api(){
        const recorrido = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const recorrer_peliculas = await recorrido.json() 
        for (const Element of recorrer_peliculas.Search) {
            console.log(`
            ${Element.imdbID}
            ${Element.Title}
            ${Element.Year}
            `)
        }
    }
}