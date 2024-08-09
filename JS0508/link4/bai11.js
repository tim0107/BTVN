function cal(n) {
    let sum = 0;
    let number = 1;
    
    for(let i = 1; i <= n; i++) {
        number *= i;      
        sum += number;    
    }
    
    console.log(sum);
}

cal(4);  
