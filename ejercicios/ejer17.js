const removerDuplicados = () => {
    const num = [1, 2, 3, 2, 4, 3, 5];  
    const unicos = [...new Set(num)];
    console.log(unicos);
}

removerDuplicados() 