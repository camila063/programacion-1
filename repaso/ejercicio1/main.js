function convertir (temperatura){
    const resultado = temperatura * 1.8+32
    return resultado
}
function mostrar (){
    const temperatura = document.getElementById("inp_convertir").value
    const respuesta = convertir(temperatura)
    document.getElementById("h_respuesta").textContent = respuesta
}