function calcular(){
    const autos = document.getElementById("slt_autos").value
    let descuento; 
    if (autos == 1) {
        descuento =1750000 *.85
    } else {
        if (autos == 2) {
           descuento = 1950000 * 0.95
        } else {
            descuento =2560000 * 0.90
        }
    }
    document.getElementById("h_respuesta").textContent = '$'+descuento
}
