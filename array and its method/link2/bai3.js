let array = new Array(100);
array.fill(0);

array.reduce((acc, element, index) => {
    array[index] = acc;
    return acc + 1;
}, 0);

let sum = array.reduce((acc, element) => {
    if (acc[element % 5 === 0]) {
        return acc;
    } else {
        return acc + element;
    }

}, 0)





console.log(array);
console.log(sum);