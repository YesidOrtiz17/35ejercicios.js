function contarPalabra(arreglo, palabra) {
    let contador = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === palabra) {
        contador++;
      }
    }
  
    return contador;
  }
  
  let palabras = ["manzana", "banana", "manzana", "pera", "manzana"];
  console.log(contarPalabra(palabras, "manzana")); 
  console.log(contarPalabra(palabras, "pera"));