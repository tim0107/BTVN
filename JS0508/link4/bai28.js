function count(n) {
    let splitNum = n.toString().split("");
    let numArray = splitNum.map(Number);
    let result = [];  
    let sum = 1;
    for(let i = 0;i < numArray.length;i++){
        if(numArray[i] % 2 !== 0){
            result.push(numArray[i])
        }
    }

    for (let i of result){
        sum *= i;
    }
    return result.length > 0 ? sum : 0;

}

let n = 3456;
console.log(count(n));  
