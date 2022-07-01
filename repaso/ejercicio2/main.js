const calcular = (n1,n2,n3) => {
    const resultado = n1 + n2 + n3
    return resultado
}

const mostrar = () => {
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value 
    const dato3 = document.getElementById("dato3").value 
    const respuesta = calcular(dato1,dato2,dato3)
    document.getElementById("h_resultado").textContent = respuesta

}