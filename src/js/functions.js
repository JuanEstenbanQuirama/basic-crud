// Función para inyectar contenido html desde javascript
export function getInitalData (movies, tbody) {
        tbody.innerHTML = ``
    for (let i = 0; i < movies.length; i++) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${movies[i].id}</th>
            <td>${movies[i].title}</td>
            <td>${movies[i].year}</td>
        </tr>
      `
    }
}

// Función para agregar nuevos registros a mi arreglo inicial (movies)
// * el parametro event trae el formulario (los datos que agrego al input)
export function addData (title, year, event, movies, tbody){
    event.preventDefault()
    const tempMovie = {
        id: Date.now(),
        title: title.value,
        year: year.value
   }
   movies.push(tempMovie)
   form.reset()
   getInitalData(movies, tbody)
}
// funcion eliminar
function deleteData () {

}

// funcion actualizar
function updateData () {

}






   


































// archivo de funciones, mostrar,  crear peliculas 
// por juan esteban dev 