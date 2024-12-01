function encontrarComunes(arreglo1, arreglo2) {
    let comunes = [];
  
    for (let i = 0; i < arreglo1.length; i++) {
      for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] === arreglo2[j] && !comunes.includes(arreglo1[i])) {
          comunes[comunes.length] = arreglo1[i];
        }
      }
    }
  
    return comunes;
  }
  console.log(encontrarComunes([1, 2, 3, 4, 5], [3, 4, 5, 6]));