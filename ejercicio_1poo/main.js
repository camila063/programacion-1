import Trapecio from "./trapecio.js";
function invocar(){
    let a = document.getElementById("inp_a").value
    let b = document.getElementById("inp_b").value
    let h = document.getElementById("inp_h").value
    const trapecio = new Trapecio(a,b,h)
    trapecio.calcular_trapecio()
    const resultado = trapecio.calcular_trapecio()
    document.getElementById("resultado").textContent = resultado

}
document.getElementById("btn").addEventListener("click",invocar)
