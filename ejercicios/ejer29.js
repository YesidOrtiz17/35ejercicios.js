const imagenGaleria = document.querySelector("#imagenGaleria");
const anteriorB = document.querySelector("#anteriorB");
const siguienteB = document.querySelector("#siguienteB");

const imagenes = [
    "img/descarga.jpeg",
    "img/descarga1.jpeg=imagen+2",
    "img/descarga 2.jpeg"
];

let indiceActual = 0; 

function actualizarImagen() {
    imagenGaleria.src = imagenes[indiceActual];
}


siguienteB.addEventListener("click", function() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarImagen();
});

anteriorB.addEventListener("click", function() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
});