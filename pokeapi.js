
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