function sumarValores() {
    const num = [2, 2, 7, 4, 5];  
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    console.log(suma);
}
sumarValores();