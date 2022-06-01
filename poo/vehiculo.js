export default class Vehiculo {
    //aca irian los atributos
    constructor(km,marca){
        this.marca = marca 
        this.kilometro = km
    }

    mostrar_km(){
        alert(this.kilometro)
    }

}