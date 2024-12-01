function sumapares(par) {
    let suma = 0;
  
    for (let i = 0; i < par.length; i++) {
      if (par[i] % 2 === 0) {
        suma += par[i];
      }
    }
  
    return suma;
  }
  
  console.log(sumapares([10, 4, 3, 5, 9, 6])); 