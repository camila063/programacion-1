import Trapecio from "./trapecio.js";
function invocar(){

    const trapecio = new Trapecio(base_a,base_b,h)
    trapecio.calcular()

}
document.getElementById("btn").addEventListener("click",invocar)