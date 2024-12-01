function polindromo(palabra) {
    let palabrainvertida = '';
  
    for (let i = palabra.length - 1; i >= 0; i--) {
      palabrainvertida += palabra[i];
    }
  
    return palabra === palabrainvertida;
  }
  

  console.log(polindromo("radar"));  
  console.log(polindromo("hola"));  
  console.log(polindromo("ana"));
  console.log(polindromo("Ana"));