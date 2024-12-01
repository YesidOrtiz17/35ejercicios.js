const numeroSecreto = Math.floor(Math.random() * 100) + 1;

  const inputNumero = document.querySelector("input");
  const mensaje = document.querySelector("p");

  function adivinarNumero() {
      const numeroUsuario = parseInt(inputNumero.value);

      if (numeroUsuario === numeroSecreto) {
          mensaje.textContent = "¡Felicidades! Adivinaste el número.";
      } else if (numeroUsuario < numeroSecreto) {
          mensaje.textContent = "El número es mayor. ¡Intenta de nuevo!";
      } else {
          mensaje.textContent = "El número es menor. ¡Intenta de nuevo!";
      }

      inputNumero.value = '';
  }