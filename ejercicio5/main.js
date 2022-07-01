function calcular(select,dato1,dato2){
    if(select==0){
        const suma= parseInt(dato1)+parseInt(dato2)
        return suma 

    }else if(select==1){ 
        const resta = dato1 - dato2
        return resta

    }else if(select==2){
        const division = dato1 / dato2
        return division

    }else{
        const multiplicacion = dato1 * dato2
        return multiplicacion
        
    }
}

function mostrar(){
    const select = document.getElementById("slt_opcion").value
    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
    const respuesta = calcular (select,dato1,dato2)
    document.getElementById("h_resultado").textContent = respuesta
}