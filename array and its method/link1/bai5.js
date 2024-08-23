const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

const result = arr2.reduce((pre, curr) => {
    if (!arr1.includes(curr)) {
        pre.push(curr);
    }
    return pre;
}, []);

console.log(result); 
