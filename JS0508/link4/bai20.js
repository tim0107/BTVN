function bai20(n) {
    let number = 1; 
   
    for (let i = 2; i <= n; i++) {
        number = Math.sqrt(i + number);
    }
    
    console.log(number);
}

bai20(4);  
