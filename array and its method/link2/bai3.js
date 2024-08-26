let array = new Array(100);
array.fill(0);


for(let i = 0;i < array.length; i++){
    array[i] = i;
}

let sum = array.reduce((acc, element) => {
    if (element % 5 === 0) {
        return acc;
    } else {
        return acc + element;
    }

}, 0)






console.log(sum);