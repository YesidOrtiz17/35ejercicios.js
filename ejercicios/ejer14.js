function combinar(nums1, num2) {
    let combinado = [];
  
   
    for (let i = 0; i < nums1.length; i++) {
        combinado[i] = nums1[i];
    }
  
    
    for (let i = 0; i < num2.length; i++) {
        combinado[nums1.length + i] = num2[i];
    }
  
    return combinado;
  }
  
  console.log(combinar([1, 2, 3], [4, 5, 6]));