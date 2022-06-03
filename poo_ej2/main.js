import Batman from "./batman.js";
function ejecutar(){
    const bat = new Batman()
    bat.consumir_api()
}
document.getElementById("btn").addEventListener("click",ejecutar)
