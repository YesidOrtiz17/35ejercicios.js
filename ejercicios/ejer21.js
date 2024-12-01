 const parrafo = document.querySelector(".miParrafo");
const boton = document.querySelector(".miBoton");

   boton.addEventListener("click", function() {
       parrafo.textContent = "El texto se ha cambiado";
   });