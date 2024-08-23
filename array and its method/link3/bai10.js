let array = [1,3,5,6,8,10,11,2];

let result = array.reduce((acc,curr) => {
    return acc += curr;
},0);

console.log(result);