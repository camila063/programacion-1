function calcular (a,b){
    const hipo = Math.sqrt( Math.pow(a,2) + Math.pow(b,2) )
    return "Hipotenusa = "+hipo
}

function mostrar(){
    const catetoa = document.getElementById("inp_a").value
    const catetob= document.getElementById("inp_b").value
    const resultado = calcular(catetoa,catetob)
    document.getElementById("h-respuesta").textContent = resultado
}