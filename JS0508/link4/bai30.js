function reverse(n) {
    let reversedString = n.toString().split("").reverse().join(""); 
    let reversedNumber = parseInt(reversedString);
    return reversedNumber;

}


let n = 12345;
console.log(reverses(n));  
