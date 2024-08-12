function sum(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function cal(x, n) {
    let number = 1;  
    
    for(let i = 1; i <= n; i++) {
        let power = 2 * i; 
        number += Math.pow(x, power) / sum(power); 
    }
    
    console.log(number);
}


cal(2, 3);  
