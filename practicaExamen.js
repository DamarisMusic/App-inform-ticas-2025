//practica para recuperatorio de arreglos y repeticiones para el 13/08/2025
let temperaturas = [20, 30, 35, 40, 14, 27, 23]
let sumaTemp = 0

for (let indice = 0; indice < temperaturas.length; indice++) {
    sumaTemp = sumaTemp + temperaturas[indice] / temperaturas.length;
}

console.log('La temperatura promedio de la semana es' + ' ' + sumaTemp)

let i = 1
while (i < 20) {
    console.log(i)
    i = i + 1
    i++
}

frutas = ['banana', 'manzana', 'pera', 'durazno', 'naranja', 'uva'];
for (let ind = 0; ind < frutas.length; ind++) {
    if(frutas[ind] === 'pera'){
        alert('La fruta se encuentra en el listado en la posicion' + ' ' + ind)
}
}


precios = [100, 250, 80, 300, 150];
for (let index = 0; index < precios.length; index++) {
    precios[index] = precios[index] * 1.21
}console.log(precios)


//ejercicios inventados x la ia para practicar

let edades = [18, 25, 30, 22, 27];
let sumaEdades = 0
for (let ind = 0; ind < edades.length; ind++) {
    sumaEdades = sumaEdades + edades[ind] / edades.length
}console.log('La temperatura promedio de la semana es' + ' ' + sumaEdades)


let ind = 5
while (ind <= 50) {
    console.log(ind)
    ind = ind + 5
}


let colores = ['rojo', 'verde', 'azul', 'amarillo', 'violeta'];
for (let index = 0; index < colores.length; index++) {
    if(colores[index] === 'amarillo'){
        console.log('El color se encuentra en la posicion' + ' ' + index)
    }
    
}


let numeros = [2, 4, 6, 8, 10];
for (let index = 0; index < numeros.length; index++) {
    numeros[index] = numeros[index] * 2
} console.log(numeros)


let valores = [40, 55, 60, 30, 90, 20];
let contador = 0
for (let index = 0; index < valores.length; index++) {
    if(valores[index] > 50)
    contador++
}console.log('La cantidad de numeros mayores a 50 es:' + ' ' + contador)