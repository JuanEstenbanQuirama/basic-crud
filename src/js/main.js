import '../styles/style.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { getInitalData, addData } from './functions' // importar las funciones
import { movies } from './data' // importar la data

let tbody = document.querySelector('tbody') // conectarme con el elemento tbody
let form = document.getElementById('form') // conectarme con el elemento form
const isTitle = document.getElementById('title') // traer la info del input
const isYear = document.getElementById('year') // traer la info del input

// inyectando información desde javascript al DOM (html)
getInitalData(movies, tbody) 

// evento para guardar la nueva información agregada
form.addEventListener('submit', function (event) {
    addData (isTitle, isYear, event, movies, tbody)
})


// Realizar el mismo ejercio desde 0 pero suando este tipo de data, crear 5 y e injectarlos en el htlm
// [
//     {
//         id:1,
//         name: "juan",
//         lastName: "lopez",
//         age:27,
//         skill: "sleep"
//     },
//      {},
// ]













