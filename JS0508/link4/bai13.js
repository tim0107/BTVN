function cal(x,n) {
    
    let number = 0;
    
    for(let i = 1; i <= n; i++) {
        number += Math.pow(x, (i * 2))    
           
    }
    
    console.log(number);
}

cal(2,3);  
