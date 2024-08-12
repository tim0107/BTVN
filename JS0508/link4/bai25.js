function count(n) {
    let splitCount = n.toString().split("");
    let sum = 1;
    for(let i of splitCount){
        sum *= parseInt(i)
    }
    return sum;
}

let n = 1234;
console.log(count(n));  
