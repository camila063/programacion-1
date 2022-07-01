const calcular = (temp) => {
    let mensaje = ''
    if (temp >=12 && temp<=32) { 
        
        mensaje = 'Temperatura baja'

    }else if (temp >=32 && temp<=68){
        mensaje = 'temperatura adecuada'
 
    }else if(temp >=68 && temp<=96){
        mensaje = 'temperatura alta'

    }else{ 
        mensaje = 'temperatura desconocida'
    }

    return mensaje 
    
}

const mostrar = () => {
    const temp = document.getElementById("dato").value
    const respuesta = calcular(temp)
    document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)