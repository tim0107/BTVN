function bai22(n) {
    let number = 1; 
    
    for (let i = 1; i < n; i++) {
        number = 1 / (1 + number);
    }
    
    console.log(1 / (1 + number));  
}

bai22(10);  
