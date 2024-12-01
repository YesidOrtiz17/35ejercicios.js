function numero10(mayor) {
    let resultado = [];
    let index = 0;
  
    for (let i = 0; i < mayor.length; i++) {
      if (mayor[i] > 10) {
        resultado[index] = mayor[i]; 
        index++;
      }
    }
  
    return resultado;
  }
  console.log(numero10([5, 12, 8, 20, 3, 15]));