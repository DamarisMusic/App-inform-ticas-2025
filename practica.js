
/*
let añoNacimiento = 2009

let añoActual = 2025

alert('Mi edad es' + añoActual - añoNacimiento)

let edad 
if (edad >= 17){
    alert("Podes ingresar al boliche")
}else{
    alert("no podes ingresar, lo siento")
}

let lluvia = prompt('¿Está lloviendio')
let nublado = prompt('¿Está nublado?')

if((lluvia == 'si')&&(nublado == 'si')){
    alert('No puedo ir a la plaza lo siento mucho')
}else{
    alert('¿Tomamos unos mates?')
}
*/
//clase 30/08
//Objects
let estudiante = {
    nombre: Damaris,
    apellido: Villegas,
    DNI: 49333734,
    direccion: nose
}
//mostrar en la consola
console.log(estudiante.nombre + ' ' + estudiante.apellido)

//para poner varios objetos se van separando con coma y se are con llaves
//ej:
let estudiante = [{
    nombre: 'Damaris',          //esta propiedad ocupa la posicion 0
    apellido: 'Villegas',
    dni: 49333734,
    direccion: nose,
    notaExamen: 10
},
{
    nombre: 'Mica',             //esta ocupa la posicion 1, y asi sucesivamente
    apellido: 'Cordoba',
    dni: 29488894,
    direccion: nose,
    notaExamen: 10
}
]
//para mostrar los apellidos en la consola y o tener q escribir todos los datos usamos for
for (let index = 0; index < estudiantes.length; index++) {
    console.log(estudiantes[index].apellido + ' ' + estudiantes[index].nombre)
}

 //si quiero quee la consola busque un dato pongo:
 estudiantes[1].apellido

//30/07/25

let estudiantes = [{
    nombre: 'Matías',
    apellido: 'Rosello',
    edad: 16,
    notaExamen: 10
},{
    nombre: 'Antonella',
    apellido: 'Lattandi',
    edad: 16,
    notaExamen: 7
},{
    nombre: 'Agustín',
    apellido: 'Ávila',
    edad: 16,
    notaExamen: 1
},
{
    nombre: 'Jerónimo',
    apellido: 'Orfila',
    edad: 16,
    notaExamen: 9
},{
    nombre: 'Jazmín',
    apellido: 'Rodriguez',
    edad: 16,
    notaExamen: 7
}]

for (let indice = 0; indice < estudiantes.length; indice++) {
    console.log(estudiantes[0].apellido + ' ' + estudiantes[0].nombre + ' ' + estudiantes[0].notaExamen)
    
}

//07/08/2025 vemos ejercicios del examen
let notas [6.5, 3, 4, 7, 10, 6, 6, 5, 4, 2, 2, 8, 9]
let cantidadNotas = notas.length

let sumaNotas = 0
for (let i = 0; i < notas.length; i++) {
    
    
}