const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

const result = arr2.reduce((pre, curr) => {
    if (!arr1.includes(curr)) {
        pre.push(curr);
    }
    return pre;
}, []);

const result2 = arr1.reduce((pre, curr) => {
    if (!arr2.includes(curr)) {
        pre.push(curr);
    }
    return pre;
}, []);



const final = [...result, ...result2];

console.log(final);