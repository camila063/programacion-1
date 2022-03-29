function mostrar_mensaje() {
    //popup
    alert('probando mi función')

}

function mostrar_en_consola(){
    //asignamos una cadena de string a una constante
    const nombre_apellido = 'Villarroel Camila'

    //forma 1 - sin template string

    console.log('nombre y apellido: '+nombre_apellido)

    //forma 2 tempalate string

    console.log(`
            Nombre y apellido: ${nombre_apellido}
            DNI
            Dirección:
    `)
}

//condicionales
function validar(){
    const calificacion = prompt('ingrese su calificación:')

    if(calificacion >= 7){
        alert('Estas aprobado')
    }else{
        alert('Estas desaprobado')
    }
}
