const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];

let counts = arrCount.reduce((acc, value) => {
    if (acc[value]) {
        acc[value]++;  
    } else {
        acc[value] = 1; 
    }
    return acc;  
}, {});

console.log(counts);

