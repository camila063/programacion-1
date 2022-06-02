export default class Trapecio{

    constructor(a,b,h){
        this.base_a = a
        this.base_b = b
        this.h = h
    }

    calcular_trapecio(){
        const suma = parseInt(this.base_a) + parseInt(this.base_b)
        const mul = suma*this.h
        const res = mul / 2
        return res
    }

   
}