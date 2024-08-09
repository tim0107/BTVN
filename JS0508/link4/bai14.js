function cal(x,n) {
    
    let number = 0;
    
    for(let i = 0; i <= n; i++) {
        number += Math.pow(x, (2 * i + 1))    
    }
    
    console.log(number);
}

cal(2,3);  
