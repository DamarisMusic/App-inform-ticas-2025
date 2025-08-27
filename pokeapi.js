//27/08725
parrafo.textContent = 'pokemon'
fetch('https://pokeapi.co/api/v2/pokemon?-limit-5')

.then(respuesta => respuesta.json())

.then(datos => {
    console.log(datos.results)
    for (let index = 0; index < datos.results.length; index++) {
        //const element = datos.results[i];
        parrafo.textContent = parrafo.textContent + ' ' + datos.results[i].name
        console.log(datos.results[i].name)
    }
})