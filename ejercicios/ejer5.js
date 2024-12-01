function verificarparimpar(numero) {
    let resultado = 'Impar';
    
    for (let i = 0; i <= numero; i++) {
      if (i === numero && numero % 2 === 0) {
        resultado = 'Par';
      }
    }
    return resultado;
  }
  console.log(verificarparimpar(6)); 
  console.log(verificarparimpar(8));
  console.log(verificarparimpar(21));