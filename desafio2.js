const notas = [2, 10, 3, 20, 50, 33, 34, 5]
let sumar = 0
for (let index = 0; index < notas.length; index++) {
    const actual = notas[index]
    if (actual % 2 == 0) {
        sumar = sumar += actual
    }

}

console.log(sumar)