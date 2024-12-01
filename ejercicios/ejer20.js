function objeto(claves, valores) {
    let objeto = {};
  
    for (let i = 0; i < claves.length; i++) {
      objeto[claves[i]] = valores[i];
    }
  
    return objeto;
  }
  
  let claves = ["nombre", "edad", "ciudad"];
  let valores = ["yesid", 17, "popayán"];
  
  console.log(objeto(claves, valores));