const calcular = (n1,n2,n3) => {
    const bloque1 = Math.pow ()
    const bloque2
    return resultado
}

const mostrar = () => {
    const datoA = document.getElementById("datoA").value
    const datoB = document.getElementById("datoB").value 
    const datoC = document.getElementById("datoC").value
    //ejecutando la funcion
    const respuesta = calcular(datoA,datoB,datoC)
    document.getElementById("h_resultado").textContent = respuesta

}


//encontrar u obtener el boton y guardarlo en la constante
const boton = document.getElementById("btn_calcular")

//agregamos un evento a escuchar. En caso el click 
boton.addEventListener("click",mostrar)
