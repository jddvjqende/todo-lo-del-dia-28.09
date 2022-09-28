const notas = [5.5,6.0,3.0,2.5,7.0,4.4]
let sumar=0
for (let index = 0; index <notas.length; index++) {
    sumar=sumar + notas[index]
    
}
console.log(sumar)
const promedio= sumar/notas.length
console.log(promedio)