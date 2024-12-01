const seguidor = document.querySelector("#seguidor");

document.addEventListener("mousemove", function(evento) {
    const x = evento.clientX; 
    const y = evento.clientY;  
    seguidor.style.left = `${x}px`;
    seguidor.style.top = `${y}px`;
});