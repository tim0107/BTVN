function sum(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function cal(x, n) {
    let number = 0;
    
    for(let i = 1; i <= n; i++) {
        number += Math.pow(x, i) / sum(i); 
    }
    
    return number;
}


console.log(cal(2, 3));  
