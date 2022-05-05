function descuentos (select) {
    const autos = document.getElementById("slt_autos").value
    if (autos==1){ 
        const auto1 = parseInt ($1750000) * 15/1750000
        return auto1

    }else if (autos==2){
        const auto2 =parseInt($1950000) * 5/1950000
        return auto2

        }else {
            const auto3 = parseInt($2560000) * 10/2560000
            return auto3
    }

}
   
    const resultado = descuentos (select)
    document.getElementById(h_respuesta).textContent = resultado 

