const input = document.querySelector("#miInput");
  const mostrarTexto = document.querySelector("#mostrarTexto");

  input.addEventListener("input", function() {
      mostrarTexto.textContent = input.value;
  });