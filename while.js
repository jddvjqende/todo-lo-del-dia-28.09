const notas = [1.3,2.1,3.4,7.0,6.2,5.4]
let sumar = 0 
let contador = 0 
while(contador<notas.length)
{
    sumar = sumar + notas[contador] 
    contador++

}
const promedio= sumar/notas.length
console.log("tu promedio es:",promedio) 