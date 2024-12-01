const contador = document.querySelector("#contador");
 const boton = document.querySelector("#botonContador");

 let contadorValor = 0;

 boton.addEventListener("click", function() {
     contadorValor++;  
     contador.textContent = contadorValor; 
 });