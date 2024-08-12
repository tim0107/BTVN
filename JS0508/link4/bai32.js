function find(n) {
    let number = n.toString().split("");  
    let numArray = number.map(Number);   
    let max = Math.min(...numArray); 
    return max;
}


let n = 34528;
console.log(find(n));  
