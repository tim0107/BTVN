// Cho số n nguyên dương bất kỳ, tính tổng các số từ 1 đến n.

let n = 10;
let sum = 0;

for(i = 0; i <= n; i++ ){
    sum += i;
}

console.log(`Tổng từ 1 đến ${n} là: ${sum}`);


// Cho số nguyên dương x bất kỳ. Viết chương trình tính giai thừa của x


let n1 = 5;
let sum1 = 1;

for(i = 1; i <= n1; i++ ){
    sum1 *= i;
}

console.log(`Giai thừa từ 1 đến ${n} là: ${sum1}`);