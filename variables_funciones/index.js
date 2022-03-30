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
    const calificacion = prompt('ingrese su calificación:');
    //condicion -forma 1
    /*if(calificacion >= 7){
        alert('Estas aprobado')
    }else{
        alert('Estas desaprobado')
        
    }
    */
   //expresion ternario
    (calificacion>= 7) ? alert('estas aprobado') : alert('desaprobado')
}

//funcion con retorno y comunicacion entre funciones
function calcular(){
    const number = prompt('ingresa un numero: ');
    const resultado = number * 10
    //estamos entregando una respuesta
    return resultado
}

function visualizar(){
    //invocamos a la funcion calcular
    const respuesta = calcular()
    alert (respuesta)


}