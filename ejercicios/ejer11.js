function fnumeromayor(arreglo, num) {
  let resultado = [];
  let index = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > num) {
      resultado[index] = arreglo[i];
      index++;
    }
  }

  return resultado;
}
console.log(fnumeromayor([17, 50, 8, 12, 3, 7], 10));