const notas=[13,0,50,3,60,9,40,5,30]
let sumar = 0
for (let index = 0; index < notas.length; index++) {
 const actual=notas[index]
 
    if (actual>10){
        sumar=sumar + actual
    }
}
console.log(sumar)