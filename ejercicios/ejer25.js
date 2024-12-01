const elemento = document.querySelector("#miElemento");
        const boton = document.querySelector("#boton");

        boton.addEventListener("click", function() {
            if (elemento.style.display === "none") {
                elemento.style.display = "block"; 
            } else {
                elemento.style.display = "none";   
            }
        });