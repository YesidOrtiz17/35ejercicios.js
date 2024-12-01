function duplicados(num) {
    let duplicar = [];
    
    for (let i = 0; i < num.length; i++) {
      for (let j = i + 1; j < num.length; j++) {
        if (num[i] === num[j] && !duplicar.includes(num[i])) {
          duplicar[duplicar.length] = num[i]; 
        }
      }
    }
    
    return duplicar;
  }
  
  console.log(duplicados([1,2,3,2,4,5,1,7,5,4]));