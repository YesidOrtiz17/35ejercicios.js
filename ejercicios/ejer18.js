function Numerosaleatorios(cantidad) {
  let numeros = [];
  
  for (let i = 0; i < cantidad; i++) {
    
    let numAleatorio = ((Date.now() + i) % 100) + 1;
    numeros.push(numAleatorio);
  }
  return numeros;
}

console.log(Numerosaleatorios(10));