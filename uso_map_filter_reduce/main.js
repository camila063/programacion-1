const tareas = [
    {
        nombre: 'Testeando soft',
        duracion: 25
    },
    {
        nombre: 'Implementación de alta cliente',
        duracion: 90
    },
    {
        ombre: 'Actualizar cliente',
        duracion: 40
    },
    {
        nombre: 'Deploy de soft',
        duracion: 120
    },
    {
        nombre: 'Corrección de bug',
        duracion: 180
    }
]
//Uso del metodo map()
let nombres = []
tareas.forEach(element => {
    
    nombres.push(element.nombre)
    
});
//aplicando map
let nombres2 = tareas.map( tarea => tarea.nombre)
/*let nombres2 = tareas.map( tarea =>{
    return tarea.nombre
})*/

/**
 * uso de filter
 */
let tareas_prolongadas
tareas.forEach(element => {
    if(element.duracion >=120){
        tareas_prolongadas.push(element)

    }
    
});