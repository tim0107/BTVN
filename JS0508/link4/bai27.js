function count(n) {
    let splitNum = n.toString().split("");
    let numArray = splitNum.map(Number);
    let result = [];  
    let sum = 0;
    for(let i = 0;i < numArray.length;i++){
        if(numArray[i] % 2 === 0){
            result.push(numArray[i])
        }
    }

    for (let i of result){
        sum += i;
    }
    return sum;      
}

let n = 34566;
console.log(count(n));  
