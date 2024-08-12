function bai21(n) {
    let number = Math.sqrt(n);  
    
    for (let i = n - 1; i >= 1; i--) {
        number = Math.sqrt(i + number);
    }
    
    console.log(number);  
}

bai21(4);  
