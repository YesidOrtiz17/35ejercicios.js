const transformarMayusculas = () => {
    const nombres = ['lisbeth', 'Carlos', 'yesid'];  
    const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
    console.log(nombresMayus);
}

transformarMayusculas();