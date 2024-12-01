const temporizador = document.querySelector("#temporizador");
const iniciar = document.querySelector("#iniciarB");

let tiempoRestante = 20; 

function iniciarTemporizador() {
    const intervalo = setInterval(function() { // se ejecuta una función cada segundo, investigación
        tiempoRestante--;  
        temporizador.textContent = tiempoRestante;  

    
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            alert("El tiempo ha terminado");
            temporizador.textContent = "0";
        }
    }, 1000);  
}

iniciar.addEventListener("click", function() {
    iniciarTemporizador();  
});