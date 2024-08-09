function cal(n) {
    let number = 0;
    for(let i = 1; i <= n;i ++){
        number += (2 * i + 1) / (2 * i +2);
    }
    console.log(number);
}

cal(4);