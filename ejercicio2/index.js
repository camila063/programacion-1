function calcular(){
    const b1 = parseInt(prompt('ingrese valor de base mayor: '));
    const b2 = parseInt(prompt('ingrese valor de base menor: '));
    const h = parseInt(prompt('ingrese valor de altura: '))
    const suma = b1 + b2
    const mult = suma * h
    const resultado = mult / 2
    return resultado
}
function mostrar(){
    const respuesta = calcular()
    alert (respuesta)
}