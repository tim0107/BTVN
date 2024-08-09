let n = 7;
let s = 1; 

for (let i = 2; i <= n; i++) {
    s += 1 / Math.pow(i, 3); 
}

console.log(s.toFixed(3)); 


// let n = 7;
// let s = 0;
// s += 1; 
// let array = [];
// let result = 0;

// for (let i = 0; i <= n; i++) {
//     s += (1 / Math.pow(n, 3)); 
//   //  console.log(s);
//     array.push(s);
// }

// for ( let i = 0; i < array.length;i++){
//     result += array[i]
// }

// console.log(result);


