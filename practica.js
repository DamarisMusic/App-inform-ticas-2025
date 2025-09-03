
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

let titulo = document.querySelector('#titulo')
let imagen = document.querySelector('#imagen')
let boton = document.querySelector('#boton')

boton.onclick = function(){
    fetch('https://pokeapi.co/api/V2/pokemon-form/110')

    .then(respuesta => respuesta.json())

    .then(datos => {
        console.log(datos)

        titulo.textContent = datos.name + '#' + datos.id
        imagen.src = datos.sprites.front_shiny
    })
}

//fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
fetch('https://pokeapi.co/api/v2/pokemon-form/151/')

.then(respuesta => respuesta.json())
.then(datos => {
    imagen.src = datos.sprites.front_shiny

})

//27/08/2025
fetch('https://pokeapi.co/api/v2/pokemon?-limit-5')

.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos.results)
    for (let index = 0; index < datos.results.length; index++) {
        const element = array[index];
        console.log(datos.results[i].name)
    }
})

//Mas practica de apis 03/09/2025 por ej: vamos a la pag de la nasa: apod.nasa.gov/? luego vamos a search y ponemos apod. Enlace que podemos utilizar para tomar datos de la api con fetch: api.nasa.gov/planetary/apod?api_key=DEMO_KEY

let img = document.querySelector('img')
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2008-08-10') //el &date=año-fecha-mes es en este caso para pedir una imagen de un año y fecha determinada, es decir, una imagen que se haya cargado en esa fecha. Count es para pedir un numero de objetos

.then(respuesta => respuesta.json())
.then(datos =>{
    console.log(datos)
    img.src = datos.url
    for (let index = 0; index < array.length; index++) {
        contenedor.innerHTML += '<img src="' +datos[i].url+'" alt"">'
        
    }
})
// en la pagina de api nasa podemos ir a generate api key, ponemos los datos y nos registramos

