const arr = [49, 30, 19, 2, 29];

let newArr = arr.reduce((acc, element) =>{
    acc.tong += element;
    acc.tich *= element;
    return acc;
},{tong:0, tich: 1});

console.log(newArr);