function cal(n) {
    let number = 0;
    let sum = 0;
    
    for(let i = 1; i <= n; i++) {
        sum += i;  
        number += 1 / sum; 
    }
    
    console.log(number);
}


cal(4);  
