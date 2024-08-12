function count(n) {
    let splitNum = n.toString().split("");
    let numArray = splitNum.map(Number);
    let result = [];  
    for(let i = 0;i < numArray.length;i++){
        if(numArray[i] % 2 !== 0){
            result.push(numArray[i])
        }

    }
    return result;
         
}

let n = 34543563499672;
console.log(count(n));  
