//IMPRIMIR UNA LINEA EN JavaScript
/*
//console.log("Hola mundo desde un archivo JavaScript!!!")
*/


//PARA SELECCIONAR UNO O VARIOS ELEMENTOS, RECORRERLOS Y AGREGARLES FUNCIONES
/*
let celda = document.querySelectorAll("td")
    //console.log(result)

celda.forEach(function(td) {
    td.addEventListener('click', function() {

        console.log(this);
    })
})*/


//PARA ANULAR EL COMPORTAMIENTO POR DEFAULT DE UN EVENTO

//obtener elementos de la clase .close
let links = document.querySelectorAll(".close")

//recorrerlos
links.forEach(function(link) {

    //agregar evento click a cada uno
    link.addEventListener('click', function(ev) {
        ev.preventDefault() // Anular el comportamiento por default de un evento
            // return false;

        //PARA AGREGAR Y QUITAR CLASES

        let contenido = document.querySelector(".content")

        //QUITAR LA ANIMACION
        contenido.classList.remove('animate__animated')
        contenido.classList.remove('animate__fadeInLeft')

        //AGREGAR ANIMACION
        contenido.classList.add('animate__animated')
        contenido.classList.add('animate__fadeOutUp')

        //TIMERS

        setTimeout(function() { // setTimeout solo se ejecuta una vez
                location.href = "/" // la direccion hacia donde quuiero ir 
            }, 600) //duracion de tiempo

        return false
    })
})