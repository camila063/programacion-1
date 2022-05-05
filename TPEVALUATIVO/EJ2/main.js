const recoger = (temp) => {
    let mensaje = ''
    if (temp >=12 && dato<=32) { 
        
        mensaje = 'Temperatura baja'

    }else if (temp >=32 && dato<=68){
        mensaje = 'temperatura adecuada'
 
    }else if(temp >=68 && dato<=96){
        mensaje = 'temperatura alta'

    }else{ 
        mensaje = 'temperatura desconocida'
    }

        return mensaje 
    
}
const calcular = () => {
    document.getElementById("dato").value
    const  temp = (recoger)
    const respuesta = recoger(temp)
    document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)