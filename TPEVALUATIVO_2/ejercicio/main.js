const objeto = () => {
    const lenguaje = {
        nombre:'Javascrip',
            librerias:{
                libreria_1: 'jquery',
                libreria_2: 'react',
                libreria_3: 'vuejs'
        },
    }
    const {nombre} = lenguaje
    const {libreria_1,libreria_2,libreria_3} = lenguaje.librerias

    console.log(`   
            nombre:${nombre}
            librerias:
            libreria 1:${libreria_1}
            libreria 2:${libreria_2}
            libreria 3:${libreria_3}

        `)
}
const boton = document.getElementById("btn").addEventListener("click",objeto)