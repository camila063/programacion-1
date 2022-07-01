let lenguajes = ['Python','JavaScript','Csharp','C++','Java','PHP','Ruby']
function mostrar (){
    const longitud = lenguajes.length
    const ultimo = lenguajes[longitud-1]
    const tercero = lenguajes[2]
    document.getElementById("h1_m").textContent = 'longitud: '+longitud+ ' ultimo: '+ultimo+ ' tercero: '+tercero;
}
const boton = document.getElementById("btn_m")
boton.addEventListener("click",mostrar)

function recorrer (){
    lenguajes.forEach((element,index) =>{
    console.log(index+ ':' +element)
    });
}
lenguajes.push('Go')
lenguajes.shift()
lenguajes.unshift('Kotlin')
lenguajes.splice(4,2)
console.log (lenguajes)

   