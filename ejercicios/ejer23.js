const lista = document.querySelector("#miLista");
const input = document.querySelector("#miInput");
const boton = document.querySelector("#agregarB");

boton.addEventListener("click", function() {
    const nuevoItem = input.value;

    if (nuevoItem.trim() !== "") { //trim quita espacios finales "investigación"
        const li = document.createElement("li");
        li.textContent = nuevoItem;

        lista.appendChild(li);

        input.value = "";
    }
});