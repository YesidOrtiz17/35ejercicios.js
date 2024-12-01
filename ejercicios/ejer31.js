function contarLetras(str) {
    const frecuencia = {}; 

    for (let i = 0; i < str.length; i++) {
        const letra = str[i].toLowerCase(); 

        if (frecuencia[letra]) {
            frecuencia[letra]++;
        } else {
            frecuencia[letra] = 1;
        }
    }

    return frecuencia;
}

const resultado = contarLetras("hola Mundo");
console.log(resultado);