let l = 5;
let w = 6;

function area(l,w) {
    let a = l * w;
    return a;
}

function perimeter(l,w) {
    let b = ( l + w) * 2;
    return b;
}

let preResult = perimeter(l,w); 
let result = area(l,w);

console.log(result);
console.log(preResult);