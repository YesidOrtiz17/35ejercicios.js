function encontrarMaximo() {
    const num = [3, 5, 7, 2, 8];  
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    console.log(max);
}
encontrarMaximo();